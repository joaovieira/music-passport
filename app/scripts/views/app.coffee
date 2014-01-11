'use strict';

class musicPassport.Views.App extends Backbone.View

  template: JST['app/scripts/templates/app']

  el: 'body'

  events:
    'click .btn-login': 'login'


  initialize: ->
    @on 'login', @login
    @on 'logout', @logout

    # render base app view
    @render()


  render: ->
    @$el.append @template @model.toJSON()
    new musicPassport.Views.Login model: @model, el: '#login'
    @


  login: ->
    FB.login (response) ->
    	console.log 'Logged in with facebook'
    	# register evrythng user api key


  logout: ->
  	FB.logout()
  	console.log 'Logged out of facebook'