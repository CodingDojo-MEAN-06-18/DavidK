const mongoose = require("mongoose");




const { Schema } = mongoose;

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/loginreg_db');
mongoose.connection.on('connected', ()=> console.log('we are connected to mongodb'));

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, minlength: 2},
    first_name: { type: String, required: true, minlength: 2},
    last_name: { type: String, required: true, minlength: 2},
    password: { type: String, required: true, minlength: 8},
    birthday: { type: Date, required: true},
    },
    { timestamps: true });



mongoose.model('User', UserSchema);
const User = mongoose.model('User');



module.exports = mongoose.model("User");
