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
    @$el.html @template { lineup: @model, getTime: @model.getTime }
    @


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
