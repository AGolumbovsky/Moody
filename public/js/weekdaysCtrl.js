var app = angular.module('moody');

app.controller('weekdaysCtrl', function($scope, $q, weekdaysSvc) {


$scope.showMonday = function() {

		console.log("showMonday weekdayCtrl works!");

		$scope.avgMon = weekdaysSvc.sortMonday();
		
		console.log($scope.avgMon + " Leopold, podliy trus..."); //logs 0, not what i want

	};
	
});