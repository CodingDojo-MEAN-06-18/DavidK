// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
//require mongoose 
var mongoose = require("mongoose");
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
var session = require('express-session');
var flash = require('express-flash');
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
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
mongoose.connection.on('connected', ()=> console.log('connected to mongodb'));

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    quote: { type: String, required: true, minlength: 2 },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema);

var Quote = mongoose.model('Quote');




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