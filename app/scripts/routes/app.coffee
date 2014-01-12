'use strict';

class musicPassport.Routers.AppRouter extends Backbone.Router

	routes:
  	"": "welcome"


  initialize: ->
    #Caching the Welcome View
    @welcomeView = new musicPassport.Views.Welcome model: musicPassport.user
    @welcomeView2 = new musicPassport.Views.Welcome model: musicPassport.user


  welcome: ->
    $('#panel-carousel').append @welcomeView.el
    $('#panel-carousel').append @welcomeView2.el
    $("#panel-carousel").owlCarousel musicPassport.carouselOptions
  