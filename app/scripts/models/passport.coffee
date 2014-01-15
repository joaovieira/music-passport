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
    @wishlist.on "reset change", => @trigger "update"

    Backbone.Model.apply this, arguments


  exists: -> @get 'exists'
  isFromOwner: -> @get 'own'
  isNew: -> @get 'new'

  isValid: ->
    @get('exists') and @get('own') and not @get('new')


  getWishList: ->
    if @isValid()
      Evt.readProperty { thng: @get('thngid') }, (properties) =>
        @wishlist.reset properties


  getAllConcerts: ->
    concerts = []
    for band in @wishlist.models
      concert = { seen: band.seen() }
      concert = _.extend concert, musicPassport.lineup.getConcert band.get('key')
      concerts.push concert

    _.sortBy concerts, (concert) -> concert.startTime


  getNextConcert: ->
    currentTime = Date.now()
    _.find @getAllConcerts(), (concert) ->
      concert.finishTime > currentTime and not concert.seen


  checkinConcert: (timestamp, concert) ->
    # update bracelet thng
    options=
      thng: @get('thngid')
      data: [
        key: concert
        value: "1"
        timestamp: timestamp
      ]

    Evt.updateProperty  options, (result) =>
        band = @wishlist.findWhere { key: result[0].key }
        if band
          band.set 'value', result[0].value
        else
          @wishlist.add new musicPassport.Models.Concert result[0]
        @trigger "checkin"