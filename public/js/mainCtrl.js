var app = angular.module('moody');

app.controller('mainCtrl', function($scope, mainSvc, weekdaysSvc) {
	
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

		console.log("moo started");
		// this is where I had a problem for 2 months on my own...
		mainSvc.getMoods()
		.then(function(data){
			console.log(data + " \n is the data from mainSvc in mainCtrl");
			$scope.moos = data;
            
        // let me try  something here
        
        
		});

		console.log("moo finished")
		

	};

	// deletes all the moods from the db
	$scope.deleteMoos = function() {

		console.log("erase memories");

		mainSvc.deleteMoods()
		.then(function(data) {
			console.log("nada aqui");
			$scope.moos = data;
		});
		$scope.loadMoos();
	};

	//clears the view, doesn't touch the data
	$scope.clearView = function() {
		$scope.moos = {};
	};

	// "Mon" button
	$scope.showMonday = function() {

		console.log("showMonday works!");

		$scope.avgMon = weekdaysSvc.sortMonday();
		
		console.log($scope.avgMon + " Leopold, podliy trus..."); //logs 0, not what i want

	};
	



});