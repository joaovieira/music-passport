window.musicPassport =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: ->
    'use strict'

    # init user
    @user = new musicPassport.Models.Profile()
    @passport = new musicPassport.Models.Passport()
    @lineup = new musicPassport.Models.Lineup()

    # init app
    @appView = new musicPassport.Views.App model: @user

    # init router
    @router = new musicPassport.Routers.AppRouter()
    Backbone.history.start()

$ ->
  'use strict'
  musicPassport.init()



# Init EVRYTHNG object wrapper
window.Evt = new Evrythng
    evrythngApiKey: 'EyvifRsWvxEh4prtcQ6LQtSHAs9AF8ce2iuxomMFbCMkaXUvpxnvOUOAH6fDePuug66HRIGGiFcDQzF7'
    evrythngAppId: '52d0185a55872c9a6d7b1616'
    facebookAppId: '1449050295309307'
    jQuery: jQuery


# Handle logging in and out events from FB
$(document).on 'fbStatusChange', (event, data) ->
  # Evt.fbCallback() #register auth with EVRTYHNG

  if data.status is 'connected'
    FB.api '/me', (response) ->
      # Test
      data = 
        'email': "joaoguerravieira@gmail.com"
        'password': "Click12345"
      
      # Deploy
      ###data =
        "access": 
          "token": data.authResponse.accessToken###

      Evt.request
        url: '/auth/evrythng'
        #url: "/auth/facebook"
        data: data
        method: 'post'
      , (access) ->
        if access.evrythngApiKey
          musicPassport.user.set response #Store the newly authenticated FB user
          musicPassport.user.set 'authenticated', true
          Evt.options.evrythngAppApiKey = Evt.options.evrythngApiKey
          Evt.options.evrythngApiKey = access.evrythngApiKey
          thngid = musicPassport.passport.get 'thngid'
          musicPassport.router.navigate "#{thngid}/home", { trigger: true }
  else
    Evt.options.evrythngApiKey = access.evrythngAppApiKey
    musicPassport.user.set musicPassport.user.defaults #Reset current FB user
    musicPassport.router.navigate "#{musicPassport.passport.get("thngid")}", { trigger: true }