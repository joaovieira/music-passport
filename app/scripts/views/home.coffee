'use strict';

class musicPassport.Views.Home extends Backbone.View

  tagName: "div"
  className: "panel-wrapper"

  template: JST['app/scripts/templates/home']

  events: 
    'click .btn-claim': 'activate'
    'click .checkin': 'checkin'
    'click .passport-details': "viewPassportDetails"
    'click .btn.lineup': "viewLineup"


  initialize: (options) ->
    @owl = options.owl
    thngid = options.model.get "thngid"
    passportAttrs = {}

    @model.on "update", @updateNextShow, this
    @model.on "checkin", @render, this

    @getStageInfo()

    # read the passport
    Evt.readThng { thng: thngid }, (thng) =>
      Evt.readAction { type: "_activation" }, (actions) =>
        # check if is a bracelet
        if thng.tags.indexOf("bracelet") isnt -1
          passportAttrs.exists = true

          # check if it has been activated or the current user already activated one
          if thng.customFields? or actions.length
            passportAttrs.new = false

            if thng.customFields?.owner is musicPassport.user.get "id"
              # this thng has been activated by the current user
              passportAttrs.own = true

        @model.set passportAttrs
        @render()
    , (error) =>
      if error.status is 400
        @render()


  render: ->
    @owl.removeItem() for i in [0..1]
    @$el.html @template 
      passport: @model.toJSON()
      closerStage: @closerStage
      otherStages: _.filter @otherStages, (stage) -> not not stage.properties?.playing
      timeMissing: @timeMissing

    @owl.addItem @el

    if @model.isValid()
      @updateNextShow()
      @owl.addItem new musicPassport.Views.Passport({model: @model}).el

    @


  updateNextShow: ->
    if concert = @model.getNextConcert()
      @$("#next-concert .empty-band").hide()
      @$("#next-concert .band").text(concert.band).show()
    else
      @$("#next-concert .band").hide()
      @$("#next-concert .empty-band").show()


  timeMissing: (a, b) ->
    difference = (a-b)/(1000*60)
    if difference > 0 then "#{difference}m" else "0m"


  activate: (e) ->
    e.preventDefault()

    # add activation action
    query =
      url: '/actions/_activation'
      data:
        type: '_activation'
        thng: @model.get "thngid"
      method: 'post'
    
    Evt.request query, (response) =>
      @model.set { "own": true, "new": false }
      @render()

    # set owner of bracelet
    options =
      data:
        customFields:
          "owner": musicPassport.user.get "id"
      thng: @model.get "thngid"
    Evt.updateThng options


  checkin: (e) ->
    e.preventDefault()

    currentTime = new Date().getTime()
    query = 
      url: '/actions/checkins'
      data:
        type: "checkins"
        thng: @model.get "thngid"
        timestamp: currentTime
        customFields:
          "concert": @closerStage.properties.playing
      method: 'post'

    Evt.request query, (result) =>
      @closerStage.checkinCount++
      @model.checkinConcert currentTime, result.customFields.concert


  viewPassportDetails: (e) ->
    e.preventDefault()
    @owl.next()
    $("body").animate scrollTop: 0


  viewLineup: (e) ->
    e.preventDefault()
    musicPassport.router.navigate "lineup", { trigger: true }


  getStageInfo: ->
    position = musicPassport.appView.position
    if typeof position isnt "string"
      queryCloser =
        "types": "thng"
        "tags": "stage"
        "lat": position.latitude
        "lon": position.longitude
        "maxDist": 0.1

      Evt.request { url: "/search", params: queryCloser }, (result) =>
        if result.thngs.length
          @closerStage = result.thngs[0]
          @closerStage.checkinCount = 0 # get checkins in this concert
          @getCheckinsConcert @closerStage

      , (error) ->
        # not close to any stage

    queryAll =
      "types": "thng"
      "tags": "stage"

    Evt.request { url: "/search", params: queryAll }, (result) =>
      others = result.thngs
      if @closerStage
        # filter thngs to remove closer stage
        others = _.filter result.thngs, (stage) => stage.id isnt @closerStage.id

      @otherStages = []
      for stage in others
        stage.checkinCount = 0
        @getCheckinsConcert stage
        @otherStages.push stage

    , (error) ->
      # not close to any stage


  getCheckinsConcert: (stage) ->
    Evt.request { url: "/actions/checkins" }, (result) =>
      checkinsConcert = _.filter result, (checkin) -> 
        checkin.customFields?.concert is stage.properties.playing

      stage.checkinCount = checkinsConcert.length