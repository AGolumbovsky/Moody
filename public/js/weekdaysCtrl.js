var app = angular.module('moody');

app.controller('weekdaysCtrl', ['weekdaysSvc', function($scope, $q, weekdaysSvc) {

	$scope.monday = function() {

		console.log("here's to Mondays!");

		weekdaysSvc.sortMonday();
	};
}]);