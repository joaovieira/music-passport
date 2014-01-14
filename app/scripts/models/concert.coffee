'use strict';

class musicPassport.Models.Concert extends Backbone.Model

	seen: ->
		@get('value') is "1"


	check: ->
		@set 'value', "1"
