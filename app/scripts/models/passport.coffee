'use strict';

class musicPassport.Models.Passport extends Backbone.Model

	defaults:
    "thngid": "!"
    "exists": false
    "own": false
    "new": true


  constructor: (attrs, options) ->
    @wishlist = new musicPassport.Collections.Wishlist()

    @on "change", @getWishList, this
    @wishlist.on "reset", => @trigger "update"

    Backbone.Model.apply this, arguments


  exists: ->
  	@get 'exists'

  isFromOwner: ->
  	@get 'own'

  isNew: ->
  	@get 'new'


  getWishList: ->
    if @get('exists') and @get('own') and not @get('new')
      Evt.readProperty { thng: @get('thngid') }, (properties) =>
        @wishlist.reset properties