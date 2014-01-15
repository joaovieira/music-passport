'use strict';

class musicPassport.Routers.AppRouter extends Backbone.Router

  routes:
    "": "welcome"
    "lineup": "lineup"
    ":thngid/home": "home"
    ":thngid": "start"


  initialize: ->
    @carouselOptions =
      items : 2
      itemsTablet: [768,1]
      itemsMobile : [479,1]
      itemsScaleUp : true
      pagination : false

    #Caching the Welcome View
    @welcomeView = new musicPassport.Views.Welcome model: musicPassport.user

    $("#panel-carousel").owlCarousel @carouselOptions
    @owl = $(".owl-carousel").data 'owlCarousel'


  welcome: ->
    @owl.removeItem() for i in [0..1]
    @owl.addItem @welcomeView.el


  home: ->
    if musicPassport.user.isAuthenticated()
      passportView = new musicPassport.Views.Home 
        model: musicPassport.passport
        owl: @owl
    else
      @navigate "", { trigger: true }


  start: (thngid) ->
    musicPassport.passport.set 'thngid', thngid

    if musicPassport.user.isAuthenticated()
      @navigate "#{thngid}/home", { trigger: true }
    else
      @welcome()


  lineup: ->
    if musicPassport.user.isAuthenticated()
      @owl.removeItem() for i in [0..1]
      lineupView = new musicPassport.Views.Lineup model: musicPassport.lineup
      @owl.addItem lineupView.el
    else
      @navigate "", { trigger: true }
