var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ClubsSchema = new Schema({
	count:{
		type:String
	},
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  date: {
    type: Date,
    default: Date.now
  },
  currency: {
    type:String
  }
});

module.exports = mongoose.model('Clubs', ClubsSchema);