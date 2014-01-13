'use strict';

class musicPassport.Views.Login extends Backbone.View

  template: JST['app/scripts/templates/login']

  events: 
    'click .login': 'login'
    'click .logout': 'logout'
    'click .brand-logo, .passport': 'home'
    'click .lineup': 'viewLineup'


  initialize: ->
    @model.on "change", this.render, this
    @render()


  render: ->
    @$el.html @template @model.toJSON()
    @

 
  login: (e) ->
    e.stopPropagation()
    musicPassport.appView.trigger 'login', e


  logout: ->
    musicPassport.appView.trigger 'logout'


  home: ->
    thngid = musicPassport.passport.get 'thngid'
    musicPassport.router.navigate "#{thngid}", { trigger: true }


  viewLineup: ->
  	musicPassport.router.navigate "lineup", { trigger: true }