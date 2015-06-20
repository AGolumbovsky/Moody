var app = angular.module('moody');

app.controller('mainCtrl', function($scope, mainSvc) {


	$scope.happyMoo = function() {

		console.log("Happy Moo :-) ");

		$scope.now = new Date();
		$scope.moo = {
			feel: 1,
			hour: $scope.now.getHours(),
			weekday: $scope.now.getDay()
		};
		mainSvc.postMood($scope.moo);
		console.log($scope.moo);
	};

	$scope.madMoo = function() {

		console.log("Mad Moo :-| ");

		$scope.now = new Date();
		$scope.moo = {
			feel: 0, 
			hour: $scope.now.getHours(), 
			weekday: $scope.now.getDay()
		};
		mainSvc.postMood($scope.moo);

		console.log($scope.moo);
	
	};



});