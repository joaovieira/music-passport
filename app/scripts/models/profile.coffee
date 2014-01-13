'use strict';

class musicPassport.Models.Profile extends Backbone.Model

  defaults:
    "id": ""
    "name": ""
    "first_name": ""
    "last_name": ""
    "gender": ""
    "username": ""
    "link": ""
    "locale": ""
    "timezone": ""
    "authenticated": false


  isAuthenticated: ->
    @get 'authenticated'