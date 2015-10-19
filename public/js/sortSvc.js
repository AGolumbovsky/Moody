var app = angular.service('moody');

app.service('sortSvc', function(mainSvc) {

// what do you want it to do, man?
this.byWeekday = function(rawData) {

	var displayWeekday = '';


	// find the best way to display the days returned from server
	// ***********!!!!!!!!!!!!!!!!!!!
	if (rawData.weekday === 0) displayWeekday = "Sunday";
	else if (rawData.weekday === 1) displayWeekday = "Monday";
	// and so on...

}



});
