'use strict';

class musicPassport.Views.Passport extends Backbone.View

  tagName: "div"
  className: "panel-wrapper"

  template: JST['app/scripts/templates/passport']

  events:
    "click .passport-remove": "removeFromPassport"


  initialize: ->
    @model.on "update", @render, this
    @render()


  render: ->
    @$el.html @template 
      concerts: @model.getAllConcerts()
      getTime: musicPassport.lineup.getTime
      getDay: musicPassport.lineup.getDay
      timeMissing: @timeMissing
      
    @$('.passport-item').popover()
    @


  timeMissing: (a, b) ->
    difference = (a-b)/(1000*60*60)
    if difference < 0
      "Starts in #{Math.abs Math.round difference} hours"
    else "Past"


  removeFromPassport: (e) ->
    e.preventDefault()
    e.stopPropagation()
