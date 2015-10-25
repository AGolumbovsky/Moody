var app = angular.module('moody');

app.controller('weekdaysCtrl', function($scope, $q, weekdaysSvc) {

	$scope.showMonday = function() {

		console.log("weekdaysCtrl Monday!");

		weekdaysSvc.sortMonday();
	};
});