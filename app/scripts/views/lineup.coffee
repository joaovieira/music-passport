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
    if musicPassport.passport.isValid()
      passport = musicPassport.passport.getAllConcerts()

    @$el.html @template 
      lineup: @model
      getTime: @model.getTime
      passport: passport
    @


  addToPassport: (e) ->
    e.preventDefault()
    $(e.currentTarget).hide()

    concert = $(e.currentTarget).prevAll(".band").text()
    options =
      thng: musicPassport.passport.get 'thngid'
      data: [
        key: concert
        value: "-1"
      ]

    Evt.updateProperty options, (response) ->
      musicPassport.passport.getWishList()
      musicPassport.appView.trigger 'notify', "You added <strong>#{concert}</strong> to your passport."
