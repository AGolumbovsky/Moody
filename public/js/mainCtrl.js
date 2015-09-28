var app = angular.module('moody');

app.controller('mainCtrl', function($scope, mainSvc) {
	
	$scope.moos = {}; 
	$scope.answers = [];
	$scope.stuff = "stuff!"
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
		console.log($scope.moo + " happy. I hope you saw it...");
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
		// look later
		mainSvc
			.postMood($scope.moo)
			.then(function (res) {
				console.log( "yay we are react to that click after the answer", res);
				$scope.answers.push(res.data);
			});

		console.log($scope.moo + " mad. I hope you saw it...");
	
	};

	// load stats from db (unrefined for now) 

	($scope.loadMoos = function() {

		console.log("moo starts");

		mainSvc.getMoods()
		.then(function(data){
			console.log(data);
			$scope.moos = data;
		});
		

	});



});