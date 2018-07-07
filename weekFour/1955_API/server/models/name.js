const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const nameSchema = new mongoose.Schema({
	name: {
		type:String,
		required: true,
		trim: true
	},
}, {
	timestamps: true

});




module.exports = mongoose.model("Name", nameSchema);