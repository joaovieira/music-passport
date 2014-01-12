'use strict';

class musicPassport.Routers.AppRouter extends Backbone.Router

	routes:
  	"/:thngid": "welcome"
  	"/:thngid/home": "home"


  initialize: ->
    #Caching the Welcome View
    @welcomeView = new musicPassport.Views.Welcome model: musicPassport.user

    @carouselOptions =
      items : 2
      itemsTablet: [768,1]
      itemsMobile : [479,1]
      itemsScaleUp : true
      pagination : false


  welcome: (thngid) ->
  	# get thng from EVRTYHNG engine

  	# if thng is activated and user logged in go to home

  	# else register or login
    $('#panel-carousel').append @welcomeView.el
    $("#panel-carousel").owlCarousel @carouselOptions


  home: ->
    @homeView = new musicPassport.Views.Home()
    @passportView new musicPassport.Views.Passport()

    $('#panel-carousel').append @homeView.el
    $('#panel-carousel').append @passportView.el
    $("#panel-carousel").owlCarousel @carouselOptions
  