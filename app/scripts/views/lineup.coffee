'use strict';

class musicPassport.Views.Lineup extends Backbone.View

  tagName: "div"
  className: "panel-wrapper"

  template: JST['app/scripts/templates/lineup']

  initialize: ->
    @render()

  render: ->
    @$el.html @template @model.toJSON()
    @