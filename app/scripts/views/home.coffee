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

    @model.on "update", @updateNextShow, this

    @getCurrentPosition().then (location) =>
      @getStageInfo(location)
    .then =>
      @readPassport @model.get "thngid"


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


  updateCurrentShow: ->
    @$("#watching .checkin-count").html ++@closerStage.checkinCount
    #@$(".checkin").hide()


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

    Evt.updateThng options, (result) ->
      musicPassport.appView.trigger 'notify', "You activated your bracelet with success."


  checkin: (e) ->
    e.preventDefault()

    currentTime = new Date().getTime()
    concert = @closerStage.properties.playing
    query = 
      url: '/actions/checkins'
      data:
        type: "checkins"
        thng: @model.get "thngid"
        timestamp: currentTime
        customFields:
          "concert": concert
      method: 'post'

    Evt.request query, (result) =>
      @updateCurrentShow()
      @model.checkinConcert currentTime, result.customFields.concert
      musicPassport.appView.trigger 'notify', "You checked in @ <strong>#{concert}</strong>. Rock on!"

    @shareFacebook concert


  viewPassportDetails: (e) ->
    e.preventDefault()
    @owl.next()
    $("body").animate scrollTop: 0


  viewLineup: (e) ->
    e.preventDefault()
    musicPassport.router.navigate "lineup", { trigger: true }


  getStageInfo: (location) ->
    promise = new RSVP.Promise (resolve, reject) =>
      queryCloser =
        "types": "thng"
        "tags": "stage"
        "lat": location.latitude
        "lon": location.longitude
        "maxDist": 0.2

      Evt.request { url: "/search", params: queryCloser }, (result) =>
        if result.thngsResultCount
          @closerStage = result.thngs[0]
          @closerStage.checkinCount = 0 # get checkins in this concert
          @getCheckinsConcert @closerStage


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

        # resolve async task
        resolve()


  getCheckinsConcert: (stage) ->
    Evt.request { url: "/actions/checkins" }, (result) =>
      checkinsConcert = _.filter result, (checkin) -> 
        checkin.customFields?.concert is stage.properties.playing

      stage.checkinCount = checkinsConcert.length


  shareFacebook: (concert) ->
    FB.ui
      method:"feed"
      name: "#{concert} @ Sziget Music Festival"
      picture: "http://joaovieira.github.io/music-passport/images/77238394.fb.jpg"
      caption: "Checked in with Music Passport"
      description: "The Sziget Music Passport keeps your concert checklist at hand, 
        along with live info from every stage and the full lineup to the rescue"
    , (response) =>
      if response and response.id
        musicPassport.appView.trigger 'notify', "<strong>Facebook:</strong> Post published with success."
      else
        musicPassport.appView.trigger 'notify', "<strong>Facebook:</strong> Post not published."


  getCurrentPosition: ->
    promise = new RSVP.Promise (resolve, reject) =>
      @position = "Current position unavailable"

      if navigator.geolocation
        navigator.geolocation.getCurrentPosition (pos) =>
          @position = pos.coords
          resolve @position
        , (error) -> 
          resolve @position
        , { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      else
        resolve @position

    promise


  readPassport: (thngid) ->
    passportAttrs = {}

    # read the passport
    Evt.readThng { thng: thngid }, (thng) =>
      Evt.readAction { type: "_activation" }, (actions) =>
        # check if is a bracelet
        if thng.tags.indexOf("bracelet") isnt -1
          passportAttrs.exists = true

          # check if it has been activated or the current user already activated one
          if thng.customFields?.owner? or actions.length
            passportAttrs.new = false

            if thng.customFields?.owner is musicPassport.user.get "id"
              # this thng has been activated by the current user
              passportAttrs.own = true

        @model.set passportAttrs
        @render()
    , (error) =>
      if error.status is 400
        @render()