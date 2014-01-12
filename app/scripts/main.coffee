window.musicPassport =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: ->
    'use strict'

    # init user
    @user = new musicPassport.Models.Profile()

    # init app
    @appView = new musicPassport.Views.App model: @user

    # init router
    @router = new musicPassport.Routers.AppRouter()
    Backbone.history.start()

$ ->
  'use strict'
  musicPassport.init()
  
  Evt.fbInit (access, fbUser) -> 
    musicPassport.user.set fbUser #Store the newly authenticated FB user
    musicPassport.router.navigate("home")



# Init EVRYTHNG object wrapper
window.Evt = new Evrythng
    evrythngApiKey: 'EyvifRsWvxEh4prtcQ6LQtSHAs9AF8ce2iuxomMFbCMkaXUvpxnvOUOAH6fDePuug66HRIGGiFcDQzF7'
    evrythngAppId: '52d0185a55872c9a6d7b1616'
    facebookAppId: '1449050295309307'
    jQuery: jQuery
    actionButton: "login-btn"


### Handle logging in and out events from FB
$(document).on 'fbStatusChange', (event, data) ->
  if data.status is 'connected'
    FB.api '/me', (response) ->
      musicPassport.user.set response #Store the newly authenticated FB user
    musicPassport.router.navigate "home"
  else
    musicPassport.user.set musicPassport.user.defaults #Reset current FB user
###