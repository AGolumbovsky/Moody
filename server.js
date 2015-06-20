var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bson = require('bson');
//require model
var Mood = require('./api/Mood')

// initialize the app
var app = express();

//middleware
app.use(express.static(__dirname + '/public'));
//parse json
app.use(bodyParser.json());

//connections to mongodb
var port = 8888;
mongoose.connect('mongodb://localhost/moody');
var db = mongoose.connection;


// ### endpoints ###

//post your mood
app.post('/api/moods', function(req, res) {
	var mood = new Mood(req.body);
	mood.save(function(err, moo) {
		if (err) {
			console.log("something's wrong, you should be sad", err);
		}
		res.json(moo);
	});
});

//get your moods
app.get('api/moods', function(req, res) {
	console.log("server got a moody request");


})




//listen on port
app.listen(port, function() {
	console.log('being all moody on port', port);
});
