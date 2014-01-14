'use strict';

class musicPassport.Views.Lineup extends Backbone.View

  tagName: "div"
  className: "panel-wrapper"

  template: JST['app/scripts/templates/lineup']

  events: 
    'click .passport-add': 'addToPassport'


  initialize: ->
    @render()


  render: ->
    # todo: check user authenticated and valid passport
    @$el.html @template { lineup: @model, timeHelper: @timeHelper }
    @


  timeHelper: (timeStr) -> 
    dt = new Date()
    time = timeStr.match /(\d+)(?::(\d\d))?/i
    dt.setHours parseInt(time[1], 10)
    dt.setMinutes(parseInt(time[2], 10) || 0)
    dt


  addToPassport: (e) ->
    e.preventDefault()

    options =
      thng: musicPassport.passport.get 'thngid'
      data: [
        key: $(e.currentTarget).prevAll(".band").text()
        value: "-1"
      ]

    Evt.updateProperty options, (response) ->
      musicPassport.passport.getWishList()
