const mongoose = require("mongoose");




const { Schema } = mongoose;

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/animal_db');
mongoose.connection.on('connected', ()=> console.log('we are connected to mongodb'));

//create animal schema and add it as a model to our database
const animalSchema = new mongoose.Schema({
    name: { 
    	type: String, 
    	required: [true, 'Please provide an animal name'], 
    },
    age: { 
    	type: Number, 
    	required: [true, 'Please provide an animal age'],
    	min: [0, 'Provide a real age'],
        max: [100, 'They wont live that long!!']
    },
    color: {
        type: String,
        required: [true, 'Please provide a color']
    },

}); 
	

//we are setting this schema in our models as 'Animal'
mongoose.model('Animal', animalSchema);

//we are retrieving this schema from our models named Animal
const Animal = mongoose.model('Animal');





module.exports = mongoose.model("Animal");