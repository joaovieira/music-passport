'use strict';

class musicPassport.Views.Home extends Backbone.View

  tagName: "div"
  className: "panel-wrapper"

  template: JST['app/scripts/templates/home']

  events: 
    'click .btn-claim': 'activate'
    'click .checkin': 'checkin'
    'click .passport-full': "viewFullPassport"


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
      otherStages: @otherStages

    @owl.addItem @el

    if @model.isValid()
    	@owl.addItem new musicPassport.Views.Passport({model: @model}).el

    @


  refresh: ->
    if concert = @model.getNextConcert() 
      detailsConcert = musicPassport.lineup.getConcert  concert.get "key"
      @$(".next-concert #band").text "#{detailsConcert.band} (#{detailsConcert.startTime})"
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
      evrythngApiKey: Evt.options.evrythngApiKey
    
    Evt.request query, (response) =>
      @model.set { "own": true, "new": false }
      @render()


  checkin: ->
    Evt.checkin { thng: @model.get("thngid") }, ->
      # set stamp on home screen


  viewFullPassport: (e) ->
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
        #if @closerStage
          # filter thngs to remove closer stage

        @otherStages = []
        for stage in result.thngs
          stage.checkinCount = 0
          @otherStages.push stage

      , (error) ->
        # not close to any stage