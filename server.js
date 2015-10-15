var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bson = require('bson');
//require mongoose model
var Mood = require('./api/Mood')

// initialize the app
var app = express();

// middleware
// serve static files
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

	console.log("server got a moody POST request");

	var mood = new Mood(req.body);
	mood.save(function(err, moo) {
		if (err) {
			console.log("something's wrong, you should be sad", err);
		}
		res.json(moo);
	});
});

//get your moods
app.get('/api/moods', function(req, res) {

	console.log("server got a moody GET request"); 

	Mood   // !!!!! is this right ??????
	.find({})
	// ok, this is not clear...
	.exec().then(function(data) {
		return res.json(data)
	});
	
});

//my code for deleting all records from db
// not working 

app.delete('/api/moods', function(req, res) {

	console.log("server got DELETE request");

	Mood.remove({}, function(err) {
		console.log("I just can't..");
	});
	res.status(200).end();
});


//listen on port
app.listen(port, function() {
	console.log('being all moody on port ', port);
});









// // ############# not my code, reference #####

// app.delete('/api/places/:placeId', requireAuth, function(req, res) {
// 	Place.remove({ _id: req.params.placeId }, function(err) {
// 		if (err) {
// 			console.log("can't delete place", err);
// 		}
// 		res.status(200).end();
// 	});
// });

// app.delete('/api/users/:userId', requireAuth, function(req, res) {
// 	User.remove({ _id: req.params.userId }, function(err) {
// 		if (err) {
// 			console.log("can't delete user", err);
// 		}
// 		res.status(200).end();
// 	});
// });

