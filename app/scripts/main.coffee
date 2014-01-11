window.musicPassport =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: ->
    'use strict'

    @carouselOptions =
      items : 2
      itemsTablet: [768,1]
      itemsMobile : [479,1]
      itemsScaleUp : true
      pagination : false


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


# Handle logging in and out events from FB
$(document).on 'fbStatusChange', (event, data) ->
    if data.status is 'connected'
        FB.api '/me', (response) ->
            musicPassport.user.set response #Store the newly authenticated FB user
    else
        musicPassport.user.set musicPassport.user.defaults #Reset current FB user


###
  carouselOptions =
  	items : 2
  	itemsTablet: [768,1]
  	itemsMobile : [479,1]
  	itemsScaleUp : true
  	pagination : false

  $("#panel-carousel").owlCarousel carouselOptions
###