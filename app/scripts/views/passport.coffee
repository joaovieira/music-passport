'use strict';

class musicPassport.Views.Passport extends Backbone.View

  tagName: "div"
  className: "panel-wrapper"

  template: JST['app/scripts/templates/passport']

  initialize: ->
    @model.on "update", @render, this
    @render()


  render: ->
    concerts = []
    for band in @model.wishlist.models
      concert = { seen: band.seen() }
      concert = _.extend concert, musicPassport.lineup.getConcert band.get('key')
      concerts.push concert

    _.sortBy concerts, (concert) -> concert.startTime

    @$el.html @template { concerts: concerts, getTime: musicPassport.lineup.getTime }
    @