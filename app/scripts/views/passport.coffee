'use strict';

class musicPassport.Views.Passport extends Backbone.View

  tagName: "div"
  className: "panel-wrapper"

  template: JST['app/scripts/templates/passport']

  initialize: ->
    @render()


  render: ->
    @$el.html @template()
    @
