'use strict';

class musicPassport.Models.Lineup extends Backbone.Model

  defaults: 
    "1":
      "date": "2014-01-15"
      "mainStage": [
      	"band": "Green Day"
      	"startTime": "21:55"
      	"finishTime": "01:00"
      	"star-level": 5
      ,
      	"band": "Two Door Cinema Club"
      	"startTime": "20:25"
      	"finishTime": "21:55"
      	"star-level": 4
      ,
      	"band": "Biffy Clyro"
      	"startTime": "19:10"
      	"finishTime": "20:25"
      	"star-level": 4
      ,
      	"band": "Stereophonics"
      	"startTime": "18:00"
      	"finishTime": "19:10"
      	"star-level": 3
      ]
      "secondaryStage": [
      	"band": "Edward Sharpe & The Magnetic Zeros"
      	"startTime": "22:30"
      	"finishTime": "00:00"
      	"star-level": 4
      ,
      	"band": "Dead Combo"
      	"startTime": "21:00"
      	"finishTime": "22:30"
      	"star-level": 3
      ,
      	"band": "Japandroids"
      	"startTime": "19:50"
      	"finishTime": "21:00"
      	"star-level": 3
      ]
    "2": 
      "date": "2014-01-16"
      "mainStage": [
      	"band": "Kings of Leon"
      	"startTime": "23:00"
      	"finishTime": "01:00"
      	"star-level": 5
      ,
      	"band": "Phoenix"
      	"startTime": "21:20"
      	"finishTime": "23:00"
      	"star-level": 5
      ,
      	"band": "Tame Impala"
      	"startTime": "20:10"
      	"finishTime": "21:20"
      	"star-level": 4
      ,
      	"band": "Jake Bugg"
      	"startTime": "19:00"
      	"finishTime": "20:10"
      	"star-level": 3
      ]
      "secondaryStage": [
      	"band": "Crystal Castles"
      	"startTime": "00:05"
      	"finishTime": "01:30"
      	"star-level": 3
      ,
      	"band": "Django Django"
      	"startTime": "22:40"
      	"finishTime": "00:05"
      	"star-level": 3
      ,
      	"band": "Of Monsters and Men"
      	"startTime": "21:25"
      	"finishTime": "22:40"
      	"star-level": 2
      ]


  getConcert: (band) ->
  	for day, concerts of @attributes
  		for concert in concerts.mainStage.concat concerts.secondaryStage		
  			return concert if concert.band.toLowerCase() is band