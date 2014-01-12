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
    new musicPassport.Views.Login model: @model, el: '#navigation'
    @


  loginHandler: ->
    # Login with EVRYTHNG
    alert 'cenas'


  logout: ->
  	FB.logout()