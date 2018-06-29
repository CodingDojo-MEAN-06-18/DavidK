// Require the Express Module
const express = require('express');
// Create an Express App
const app = express();
//require mongoose 
const mongoose = require("mongoose");
// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');
// Integrate body-parser with our App
const session = require('express-session');
const flash = require('express-flash');

// Require path
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

app.use(flash());

app.use(session({
    secret: 'mypassword',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));


const { Schema } = mongoose;

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.connection.on('connected', ()=> console.log('we are connected to mongodb'));


const QuoteSchema = new mongoose.Schema({
    name: { 
    	type: String, 
    	required: true, 
    	minlength: 2 
    },
    quote: { 
    	type: String, 
    	required: true, 
    	minlength: 2 },
    date: { 
    	type: Date, 
    	default: Date.now }
	}, 
	{ timestamps: true });

//we are setting this schema in our models as 'Quote'
mongoose.model('Quote', QuoteSchema);

//we are retrieving this schema from our models named User
const Quote = mongoose.model('Quote');

//routes 
app.get('/', function(req, res) { 
    res.render('index');
});

app.get('/quotes', function(req,res){
	//grab all quotes and pass into view
	let quoteHere;
	query = Quote.find({}, function(err,quotes){
		quoteHere = quotes; 
		res.render("quotes", {quotes: quoteHere});
	});
});



app.post('/quotes', function(req, res) {
	console.log("POST DATA", req.body);
	//create a new Quote from req.body
 	let quote = new Quote(req.body);
 	quote.save(function(err) {
 		if(err){
 			for (let key in err.errors){
 				req.flash('quote', err.errors[key].message)
 			}
 			res.redirect('/');
 		} else {
 			req.flash('success', 'successfully added to the database!');
 			res.redirect('/quotes');
 		}
 	});

});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})