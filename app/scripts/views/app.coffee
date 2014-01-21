'use strict';

class musicPassport.Views.App extends Backbone.View

  template: JST['app/scripts/templates/app']

  el: 'body'

  events:
    'click .btn-login': 'login'
    'click button.close': 'dismiss'


  initialize: ->
    @on 'login', @login
    @on 'logout', @logout
    @on 'notify', @notify

    # render base app view
    @render()
    @


  render: ->
    @$el.append @template @model.toJSON()
    new musicPassport.Views.Login model: @model, el: '#navigation'
    @


  login: (e) ->
    e.preventDefault()
    ###data = 
      'email': "joaoguerravieira@gmail.com"
      'password': "Click12345"

    Evt.request
      url: '/auth/evrythng'
      data: data
      method: 'post'
    , (access) ->
      if access.evrythngApiKey
        musicPassport.user.set {id:"348972", name:"João Vieira"} #Store the newly authenticated FB user
        musicPassport.user.set 'authenticated', true
        Evt.options.evrythngAppApiKey = Evt.options.evrythngApiKey
        Evt.options.evrythngApiKey = access.evrythngApiKey
        thngid = musicPassport.passport.get 'thngid'
        musicPassport.router.navigate "#{thngid}/home", { trigger: true }###

    FB.login null, { scope: 'email,user_birthday' }


  logout: ->
    FB.logout()


  notify: (message) =>
    @$('#notification span').html(message).parent().slideDown()


  dismiss: (e) ->
    e.stopPropagation()
    $(e.currentTarget).parent().slideUp()