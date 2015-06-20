var app = angular.module('moody');

app.controller('ctrl', ['svc', function($scope, svc) {

	$scope.moods = [];
	console.log($scope.moods);

	$scope.postMood = function() {
		console.log("mood remembered");
	}
}]);