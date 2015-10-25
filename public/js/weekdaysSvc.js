var app = angular.module('moody');

app.service('weekdaysSvc', function(mainSvc) {

	//show number index for all Mondays(range from -1 to 1)
	this.sortMonday = function() {

		console.log("weekdaysSvc is not dead")

		
		var gotGrins = [];
		var grinArr = [];
		var averageMonday = 0;
				
		// getting the mood objects from the db thru mainSvc
		mainSvc.getMoods()
		.then(function(got) {
			console.log(got);
			gotGrins = got;

		// make sure gotGrins is the data;	
		console.log(gotGrins[0]['feel']); // test

		
		
		// push just the 'feel' from each mood into grinArr
		// if the day is Monday
		for(var mood in gotGrins) {

			//if the weekday is Monday
			if (gotGrins[mood]['weekday'] == 0) {

				grinArr.push(gotGrins[mood]['feel']);

			}

		}; // working :-)

		console.log(grinArr);

		// find the average number for all moods
	
		var averageMood = grinArr.reduce(function(prev, curr) {
				return prev + curr;
			}) / grinArr.length;	
		console.log(averageMood + " is the average m..");
		
		averageMonday = averageMood;
		console.log(averageMonday + " is the average for monday");

		});
	return averageMonday;

	};


})