var app = angular.module('moody');

app.service('weekdaysSvc', function(mainSvc) {

	this.sortMonday = function() {

		//show number index for all Mondays(range from -1 to 1)

		//test data obj
		// var data = 	[

		//   {
		//     "_id": "562415ddd624c1782d3a8fcc",
		//     "feel": 1,
		//     "hour": 14,
		//     "weekday": "0",
		//     "__v": 0
		//   },
		//   {
		//     "_id": "562415ded624c1782d3a8fcd",
		//     "feel": 0,
		//     "hour": 14,
		//     "weekday": "0",
		//     "__v": 0
		//   },
		//   {
		//     "_id": "562415e0d624c1782d3a8fce",
		//     "feel": 1,
		//     "hour": 14,
		//     "weekday": "0",
		//     "__v": 0
		//   },
		//   {
		//     "_id": "562415e1d624c1782d3a8fcf",
		//     "feel": 0,
		//     "hour": 14,
		//     "weekday": "0",
		//     "__v": 0
		//   },
		//   {
		//     "_id": "562415e2d624c1782d3a8fd0",
		//     "feel": 1,
		//     "hour": 14,
		//     "weekday": "0",
		//     "__v": 0
		//   }
		// ];

		mainSvc.getMoods()
		.then(function(data) {
			console.log(data);
			grins = data;
		});



		//var grinArr = [];
		var grinIndex = 0;
		var sum = 0;

		for(mood in data) {

		grinArr.push(mood["feel"]);

		};

		for(var i=0; i<grinArr.length; i++) {
			sum =+ grinArr[i];
		};

		grinIndex = sum / grinArr.length;

		return grinIndex;

	};



} )