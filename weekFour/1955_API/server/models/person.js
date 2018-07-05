const mongoose = require('mongoose');


const PersonSchema = new mongoose.Schema({
	name: {
		type:String,
		required: true,
		trim: true
	}
});



mongoose.model('Person', PersonSchema);

module.exports = mongoose.model("Person");