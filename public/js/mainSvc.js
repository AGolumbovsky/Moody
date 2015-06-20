var app = angular.module('moody');

app.service('mainSvc', function($http, $q) {

	this.postMood = function(moo) {
		var dfd = $q.defer();

		$http({
			method: 'POST', 
			url: 'api/moods', 
			data: moo	
		})
		.then(function(res) {
			dfd.resolve(res.data);
		});
		return dfd.promise;
	};

	this.getMoods = function() {

		console.log("getMoods from Svc says hello");

		var dfd = $q.defer();

		$http({
			method: 'GET', 
			url: 'api/moods'
		})
		.then(function(res) {
			dfd.resolve(res.data);
		});

		console.log("getMoods done");
		return dfd.promise;
	};





});