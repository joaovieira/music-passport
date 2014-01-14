'use strict';

class musicPassport.Views.Home extends Backbone.View

  tagName: "div"
  className: "panel-wrapper"

  template: JST['app/scripts/templates/home']

  events: 
    'click .btn-claim': 'activate'
    'click .checkin': 'checkin'
    'click .passport-details': "viewPassportDetails"


  initialize: (options) ->
    @owl = options.owl
    thngid = options.model.get 'thngid'

    @model.on "update", @refresh, this

    # read the passport
    Evt.readThng { thng: thngid }, (thng) =>
      if thng.tags.indexOf "bracelet" isnt -1 # check if is a bracelet
        Evt.readAction { type: "_activation" }, (action) =>
          if action.length
            # this thng has been activated. set properties
            @model.set
              "exists": true
              "own": (action[0].customFields.owner is musicPassport.user.get "id")
              "new": (action[0].thng isnt thngid)
          else
            @model.set 'exists', true

          @render()
    , (error) =>
      if error.status is 400
        @model.set 'exists', false
        @render()

    @getStageInfo()


  render: ->
    @$el.html @template 
      passport: @model.toJSON()
      closerStage: @closerStage
      otherStages: _.filter @otherStages, (stage) -> not not stage.properties?.playing

    @owl.addItem @el

    if @model.isValid()
    	@owl.addItem new musicPassport.Views.Passport({model: @model}).el

    @


  refresh: ->
    if concert = @model.getNextConcert() 
      detailsConcert = musicPassport.lineup.getConcert concert.get "key"
      date = new Date(detailsConcert.startTime)
      time = musicPassport.lineup.getTime date
      @$(".next-concert #band").text "#{detailsConcert.band} (#{time})"
      @$(".next-concert").show()
    else
      @$(".next-concert").hide()


  activate: (e) ->
    e.preventDefault()

    query =
      url: '/actions/_activation'
      data:
        timestamp: new Date().getTime()
        type: '_activation'
        customFields:
          "owner": musicPassport.user.get "id"
        thng: @model.get "thngid"
      method: 'post'
    
    Evt.request query, (response) =>
      @model.set { "own": true, "new": false }
      @render()


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
      @model.checkinConcert currentTime, result.customFields.concert
      @render()


  viewPassportDetails: (e) ->
  	e.preventDefault()
  	@owl.next()
  	$("body").animate scrollTop: 0


  getStageInfo: ->
    position = musicPassport.appView.position
    if typeof position isnt "string"
      queryCloser =
        "types": "thng"
        "tags": "stage"
        "lat": position.latitude
        "lon": position.longitude
        "maxDist": 0.1

      queryAll =
        "types": "thng"
        "tags": "stage"

      Evt.request { url: "/search", params: queryCloser }, (result) =>
        @closerStage = result.thngs[0]
        # get check ins in this stage
        @closerStage.checkinCount = 0

      , (error) ->
        # not close to any stage

      Evt.request { url: "/search", params: queryAll }, (result) =>
        others = result.thngs
        if @closerStage
          # filter thngs to remove closer stage
          others = _.filter result.thngs, (stage) => stage.id isnt @closerStage.id

        @otherStages = []
        for stage in others
          stage.checkinCount = 0
          @otherStages.push stage

      , (error) ->
        # not close to any stage