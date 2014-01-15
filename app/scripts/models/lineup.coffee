'use strict';

class musicPassport.Models.Lineup extends Backbone.Model

  defaults: 
    "1":
      "date": 1389744000000 #15/01/2014
      "mainStage": [
      	"band": "Green Day"
      	"startTime": 1389822900000 #21:55
      	"finishTime": 1389834000000 #01:00
      	"star-level": 5
      ,
      	"band": "Two Door Cinema Club"
      	"startTime": 1389817500000 #20:25
      	"finishTime": 1389822900000 #21:55
      	"star-level": 4
      ,
      	"band": "Biffy Clyro"
      	"startTime": 1389813000000 # 19:10
      	"finishTime": 1389817500000 # 20:25
      	"star-level": 4
      ,
      	"band": "Stereophonics"
      	"startTime": 1389808800000 # 18:00
      	"finishTime": 1389813000000 # 19:10
      	"star-level": 3
      ]
      "secondStage": [
      	"band": "Edward Sharpe & The Magnetic Zeros"
      	"startTime": 1389825000000 # 22:30
      	"finishTime": 1389830400000 # 00:00
      	"star-level": 4
      ,
      	"band": "Dead Combo"
      	"startTime": 1389819600000 # 21:00
      	"finishTime": 1389825000000 # 22:30
      	"star-level": 3
      ,
      	"band": "Japandroids"
      	"startTime": 1389815400000 # 19:50
      	"finishTime": 1389819600000 # 21:00
      	"star-level": 3
      ]
    "2": 
      "date": 1389830400000 #16/01/2014
      "mainStage": [
      	"band": "Kings of Leon"
      	"startTime": 1389913200000 # 23:00
      	"finishTime": 1389920400000 # 01:00
      	"star-level": 5
      ,
      	"band": "Phoenix"
      	"startTime": 1389907200000 # 21:20
      	"finishTime": 1389913200000 # 23:00
      	"star-level": 5
      ,
      	"band": "Tame Impala"
      	"startTime": 1389903000000 # 20:10
      	"finishTime": 1389907200000 # 21:20
      	"star-level": 4
      ,
      	"band": "Jake Bugg"
      	"startTime": 1389898800000 # 19:00
      	"finishTime": 1389903000000 #20:10
      	"star-level": 3
      ]
      "secondStage": [
      	"band": "Crystal Castles"
      	"startTime": 1389917100000 # 00:05
      	"finishTime": 1389922200000 # 01:30
      	"star-level": 3
      ,
      	"band": "Django Django"
      	"startTime": 1389912000000 # 22:40
      	"finishTime": 1389917100000 # 00:05
      	"star-level": 3
      ,
      	"band": "Of Monsters and Men"
      	"startTime": 1389907500000 # 21:25
      	"finishTime": 1389912000000 # 22:40
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