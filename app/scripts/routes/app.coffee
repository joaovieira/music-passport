'use strict';

class musicPassport.Routers.AppRouter extends Backbone.Router

	routes:
  	"": "welcome"


  initialize: ->
    #Caching the Welcome View
    @welcomeView = new musicPassport.Views.Welcome model: musicPassport.user


  welcome: ->
    $('#panel-carousel').html @welcomeView.el
    $("#panel-carousel").owlCarousel musicPassport.carouselOptions
  