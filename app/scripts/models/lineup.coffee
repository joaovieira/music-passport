'use strict';

class musicPassport.Models.Lineup extends Backbone.Model

  defaults: 
    "1":
      "date": 1390435200000  #23/01/2014
      "mainStage": [
      	"band": "Green Day"
      	"startTime": 1390514100000 #21:55
      	"finishTime": 1390525200000 #01:00
      	"star-level": 5
      ,
      	"band": "Two Door Cinema Club"
      	"startTime": 1390508700000 #20:25
      	"finishTime": 1390514100000 #21:55
      	"star-level": 4
      ,
      	"band": "Biffy Clyro"
      	"startTime": 1390504200000 # 19:10
      	"finishTime": 1390508700000 # 20:25
      	"star-level": 4
      ,
      	"band": "Stereophonics"
      	"startTime": 1390500000000 # 18:00
      	"finishTime": 1390504200000 # 19:10
      	"star-level": 3
      ]
      "secondStage": [
      	"band": "Edward Sharpe & The Magnetic Zeros"
      	"startTime": 1390516200000 # 22:30
      	"finishTime": 1390521600000 # 00:00
      	"star-level": 4
      ,
      	"band": "Dead Combo"
      	"startTime": 1390510800000 # 21:00
      	"finishTime": 1390516200000 # 22:30
      	"star-level": 3
      ,
      	"band": "Japandroids"
      	"startTime": 1390506600000 # 19:50
      	"finishTime": 1390510800000 # 21:00
      	"star-level": 3
      ]
    "2": 
      "date": 1390521600000 #24/01/2014
      "mainStage": [
      	"band": "Kings of Leon"
      	"startTime": 1390604400000 # 23:00
      	"finishTime": 1390611600000 # 01:00
      	"star-level": 5
      ,
      	"band": "Phoenix"
      	"startTime": 1390598400000 # 21:20
      	"finishTime": 1390604400000 # 23:00
      	"star-level": 5
      ,
      	"band": "Tame Impala"
      	"startTime": 1390594200000 # 20:10
      	"finishTime": 1390598400000 # 21:20
      	"star-level": 4
      ,
      	"band": "Jake Bugg"
      	"startTime": 1390590000000 # 19:00
      	"finishTime": 1390594200000 #20:10
      	"star-level": 3
      ]
      "secondStage": [
      	"band": "Crystal Castles"
      	"startTime": 1390608300000 # 00:05
      	"finishTime": 1390613400000 # 01:30
      	"star-level": 3
      ,
      	"band": "Django Django"
      	"startTime": 1390603200000 # 22:40
      	"finishTime": 1390608300000 # 00:05
      	"star-level": 3
      ,
      	"band": "Of Monsters and Men"
      	"startTime": 1390598700000 # 21:25
      	"finishTime": 1390603200000 # 22:40
      	"star-level": 2
      ]


  getConcert: (band) ->
  	for day, concerts of @attributes
  		for concert in concerts.mainStage.concat concerts.secondStage		
  			if concert.band.toLowerCase() is band
          return _.extend concert, {day: day}


  getTime: (miliseconds) ->
    date = new Date miliseconds
    "#{zeroPad date.getHours()}h#{zeroPad date.getMinutes()}"

  zeroPad = (x) ->
    if x < 10 then '0'+x else ''+x