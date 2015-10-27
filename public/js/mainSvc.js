var app = angular.module('moody');

app.service('mainSvc', function($http, $q) {

	// posts the current mood to the db
	this.postMood = function(moo) {

		console.log("postMood is at your main Service")
		var dfd = $q.defer();
		console.log(moo);
		$http({
			method: 'POST', 
			url: 'api/moods', 
			data: moo	
		})
		.then(function(res) {
			dfd.resolve(res.data);
			console.log("postMood did it");			
		});

		return dfd.promise;
	};

	// retrieves all moods (for the user) from the db
	this.getMoods = function() {

		var dfd = $q.defer();

		$http({
			method: 'GET', 
			url: 'api/moods'
		})
		.then(function(res) {
			dfd.resolve(res.data);
		});

		console.log("getMoods in main Svc");

		return dfd.promise; 
	};

	// deletes all the mood records (for the user) from the db
	// ********  figure out why couldn't make it work with $q :-/

	this.deleteMoods = function() {
		console.log("deleteMoods from mainSvc..");

		//var dfd = $q.defer;

		return $http({
			method: 'DELETE', 
			url: 'api/moods'
		})
		// .then(function(res) {
		// 	dfd.resolve(res.data);
		// });

		console.log("deleteMoods did it");

		//return dfd.promise;

	};



});