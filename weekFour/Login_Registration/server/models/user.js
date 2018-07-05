const mongoose = require("mongoose");
const validate = require('mongoose-validator');
const bCrypt = require('bcrypt-as-promised');
const validator = require('validator');
const { Schema, model } = mongoose;

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/loginreg_db');
mongoose.connection.on('connected', ()=> console.log('we are connected to mongodb'));

const UserSchema = new mongoose.Schema({
    email: { 
    	type: String, 
    	required: true, 
    	unique: true,
    	minlength: 2,
    	validate: {
    		validator( email ) {
    			return validator.isEmail(email);
    		},
    		message:'not a valid email'
    	}
    },
    first_name: { 
    	type: String, 
    	required: true, 
    	minlength: 2
    },
    last_name: { 
    	type: String, 
    	required: true, 
    	minlength: 2
    },
    password: { 
    	type: String, 
    	required: true, 
    	minlength: 8,
    	validate: {
    	validator: function(value){
    		return (/^([^@\s]+)@((?:[-a-z0-9]+.)+[a-z]{2,})$/i).test( value )
    	},
    	message: "please provide a valid email"
    }

    },
   
    birthday: { 
    	type: Date, 
    	required: true
    },
},
   {timestamps: true });


	UserSchema.pre('save', function(next){
		if (!this.isModified('password')){
			return next();
		}
			bCrypt.hash(this.password, 10)
			.then(hashed_password => {
				this.password = hashed_password;
				next();
			})
			.catch(next);
	})

UserSchema.statics.validatePassword = function(passwordFromForm, storedHashedPassword){
	return bCrypt.compare(passwordFromForm, storedHashedPassword)
}





// mongoose.model('User', UserSchema);

// const User = mongoose.model('User');



module.exports = model.call(mongoose, 'User', UserSchema);
