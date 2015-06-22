var app = angular.module('moody');

app.service('mainSvc', function($http, $q) {

	this.postMood = function(moo) {
		var dfd = $q.defer();

		$http({
			method: 'POST', 
			url: 'api/moods', 
			data: moo	
		})
		.then(function(res) {
			dfd.resolve(res.data);
		});
		return dfd.promise;
	};

	this.getMoods = function() {

		console.log("getMoods from Svc says hello");

		var dfd = $q.defer();

		$http({
			method: 'GET', 
			url: 'api/moods'
		})
		.then(function(res) {
			dfd.resolve(res.data);
		});

		console.log("getMoods done");
		return dfd.promise; // returns object but cannot display
	};
	// try to mess with:

	/*
	function asyncGreet(name) {
  // perform some asynchronous operation, resolve or reject the promise when appropriate.
  return $q(function(resolve, reject) {
    setTimeout(function() {
      if (okToGreet(name)) {
        resolve('Hello, ' + name + '!');
      } else {
        reject('Greeting ' + name + ' is not allowed.');
      }
    }, 1000);
  });
}


*/






});