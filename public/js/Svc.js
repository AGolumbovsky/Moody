var app = angular.module('moody');

app.service('svc', function($http, $q) {

	this.postMood = function() {
		var dfd = $q.defer();

		$http({
			method: 'POST', 
			url: 'api/moods', 
			data: mood		
		})
		.then(function(res) {
			dfd.resolve(res.data);
		});
		return dfd.promise;
	};

	this.getMoods = function() {
		var dfd = $q.defer();

		$http({
			method: 'GET', 
			url: 'api/moods'
		})
		.then(function(res) {
			dfd.resolve(res.data);
		});
		return dfd.promise;
	};




});