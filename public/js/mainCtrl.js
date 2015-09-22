var app = angular.module('moody');

app.controller('mainCtrl', function($scope, mainSvc) {
	
	$scope.moos = {}; 

	// click on happy face. post to db
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

	// click on mad face. post to db
	$scope.madMoo = function() {

		console.log("MadCowThisIs :-| ");

		$scope.now = new Date();
		$scope.moo = {
			feel: 0, 
			hour: $scope.now.getHours(), 
			weekday: $scope.now.getDay()
		};
		mainSvc.postMood($scope.moo);

		console.log($scope.moo);
	
	};

	// load stats from db (unrefined for now) 

	($scope.loadMoos = function() {

		console.log("moo starts");

		$scope.moos = mainSvc.getMoods();
		console.log($scope.moos);

	})(); // added IIFE. It's working but not helping much



});