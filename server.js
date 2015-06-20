var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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

//listen on port
app.listen(port, function() {
	console.log('being all moody on port', port);
})
