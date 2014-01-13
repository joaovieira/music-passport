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

    # read the passport
    Evt.readThng { thng: thngid }, (thng) =>

      Evt.readAction { type: "_activation" }, (action) =>
        if action.length
          # this thng has been activated
          # get the owner
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


  render: ->
    @$el.html @template @model.toJSON()
    @owl.addItem @el

    if @model.exists() and @model.isFromOwner() and not @model.isNew()
    	@owl.addItem new musicPassport.Views.Passport({model: @model}).el

    @


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