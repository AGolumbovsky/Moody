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
		console.log($scope.moo + " happy. I hope you saw it...");
		$scope.loadMoos();
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
				console.log("posted mad ctrl")
			});

		console.log($scope.moo + " mad. I hope you saw it...");
		$scope.loadMoos();
	
	};

	// load stats from db (unrefined for now) 

	$scope.loadMoos = function() {

		console.log("moo starts");
		// this is where I had a problem for 2 months of trying to figure it out on my own... sometimes you just have to ask for help. took < 10 min
		mainSvc.getMoods()
		.then(function(data){
			console.log(data);
			$scope.moos = data;
		});

		

	};

	$scope.deleteMoos = function() {

		console.log("erase memories");

		mainSvc.deleteMoods()
		.then(function(data) {
			console.log("nada aqui");
			$scope.moos = data;
		});
	};
	$scope.clearView = function() {
		$scope.moos = {};
	}
	



});