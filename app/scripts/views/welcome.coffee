'use strict';

class musicPassport.Views.Welcome extends Backbone.View

  tagName: "div"
  className: "panel-wrapper"

  template: JST['app/scripts/templates/welcome']

  initialize: ->
    @render()


  render: ->
    @$el.html @template()
    if not not @model.get('id')
      @$('.btn-login').addClass 'hidden'
    else
      @$('.btn-login').removeClass 'hidden'
    
    @