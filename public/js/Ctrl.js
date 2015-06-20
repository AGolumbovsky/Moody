var app = angular.module('moody');

app.controller('ctrl', ['svc', function($scope, svc) {

	$scope.happyMoo = function() {
		console.log("Happy Moo :-) ");
		alert("Happy Moo! :-)");
	};

	$scope.madMoo = function() {
		console.log("Mad Moo :-| ")
		alert("Mad Moo! :-|");
	};




}]);