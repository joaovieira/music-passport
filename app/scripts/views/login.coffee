'use strict';

class musicPassport.Views.Login extends Backbone.View

  template: JST['app/scripts/templates/login']

  events: 
    'click .login': 'login'
    'click .logout': 'logout'


  initialize: ->
    @model.on "change", this.render, this
    @render()


  render: ->
    @$el.html @template @model.toJSON()
    @

  
  login: (e) ->
    e.stopPropagation()
    musicPassport.appView.trigger 'login'


  logout: ->
    musicPassport.appView.trigger 'logout'
