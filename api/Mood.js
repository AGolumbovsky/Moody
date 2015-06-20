var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moodSchema = new Schema({

	feel: Number,
	hour: Number,
	weekday: String
});

module.exports = mongoose.model('Mood', moodSchema);