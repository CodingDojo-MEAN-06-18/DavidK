// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
//require mongoose 
var mongoose = require("mongoose");
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

const { Schema } = mongoose;

//connect our mongoose
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.connection.on('connected', ()=> console.log('connected to mongodb'));

var UserSchema = new mongoose.Schema({
	name:String,
	age: Number

	// name: {
	// 	type:String,
	// 	required: [true, 'Provide an animal name'],
	// },
	// age: {
	// 	type:Number,
	// 	required: [true, 'provide an animal age'],
	// 	min: [0, 'Provide a real age'],
	// 	max: [100, 'animals do not live that long!!']
	// },
	// eatsPeople: {
	// 	type:Boolean,
	// 	default:false
	// },
});
//we are setting this schema in our models as 'user'
mongoose.model('User', UserSchema);

//we are retrieving this schema from our models named User
var User = mongoose.model('User')



// const Animal = mongoose.model('Animal');

// const animal = new Animal({
// 	name: 'Sally',
// 	age: 19,
// 	eatsPeople: false,
// });

// animal.save()
// 	.then(function(document){
// 		console.log('saved document', document);
// 		//succes redirect 
// 	})
// 	.catch(function(error){
// 		// console.log('got an error',error.errors.age.message);
		

// 		const errors = Object.keys(error.errors).map(key =>{
// 			return error.errors[key].message;
			
// 		});
// 		console.log(errors);
// 		// for (let index = 0; index <keys.length; index++){
// 		// 	console.log(keys[index]);
// 		// 	errors.push(error.errors[keys[index]].message);
// 		// }

// 	});




// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
   
    res.render('index');
});
// Add User Request 
app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new User({name: req.body.name, age: req.body.age});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
