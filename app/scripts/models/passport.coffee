'use strict';

class musicPassport.Models.Passport extends Backbone.Model

	defaults:
    "thngid": "!"
    "exists": false
    "own": false
    "new": true

  exists: ->
  	@get 'exists'

  isFromOwner: ->
  	@get 'own'

  isNew: ->
  	@get 'new'