var app = angular.module('moody');

app.controller('mainCtrl', function($scope, mainSvc, moods) {

	$scope.moo = moo;

	$scope.happyMoo = function() {

		console.log("Happy Moo :-) ");
		$scope.now = new Date();
		$scope.moo = {
			feel: 1,
			hour: $scope.now.getHours(),
			weekday: $scope.now.getDay()
		};
		mainSvc.postMood($scope.moo);
	};

	$scope.madMoo = function() {
		console.log("Mad Moo :-| ")
	
	};



});