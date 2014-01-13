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


  logout: (e) ->
    e.preventDefault()
    musicPassport.appView.trigger 'logout'


  home: (e) ->
    e.preventDefault()
    if /home/.test Backbone.history.fragment
      musicPassport.router.owl.goTo 0
      $("body").animate scrollTop: 0
    else
      thngid = musicPassport.passport.get 'thngid'
      musicPassport.router.navigate "#{thngid}/home", { trigger: true }

  viewLineup: (e) ->
    e.preventDefault()
    musicPassport.router.navigate "lineup", { trigger: true }