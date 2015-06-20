var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moodSchema = new Schema({
	
	hour: Number,
	weekday: String
});

module.exports = mongoose.model('model', moodSchema);