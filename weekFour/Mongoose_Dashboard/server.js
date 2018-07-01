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
    date: { 
    	type: Date,  
    	default: Date.now 
    }

}); 
	

//we are setting this schema in our models as 'Animal'
mongoose.model('Animal', animalSchema);

//we are retrieving this schema from our models named Animal
const Animal = mongoose.model('Animal');




//routes here 
app.get('/', function(req, res) { 
    let animalHere;
    query = Animal.find({}, function(err,animals){
        animalHere = animals; 
        res.render("index", {animals: animalHere});
    });
});


app.get('/new', function(req,res) {
    res.render('new');
})

app.post('/', function(req,res) {
    console.log("POST DATA", req.body);
    // Animal.create(request.body)
        // .then(animal => {
        //     console.log('animal', animal);
        //response.redirect('/');
        // })
        //  .catch(console.log);
    let animal = new Animal(req.body);
    animal.save(function(err) {
        if(err){
            for (let key in err.errors){
                req.flash('animal', err.errors[key].message)
            }
            res.redirect('/');
        } else {
            req.flash('success', 'successfully added to the database!');
            res.redirect('/');
        }
    });
   
});


app.get('/:id', function(req,res) {
    Animal.find({ _id: req.params.id}, function(err,response){
        if(err) {
            console.log(err);
        }
        res.render('show', {animal: response[0] });
    });
});

app.get('/:id/edit/', function(req, res){
    Animal.find({ _id: req.params.id }, function(err, response) {
        if (err) { 
            console.log(err); 
        }
        res.render('edit', { animal: response[0] });
  })
});

//update
app.post('/:id', function(req,res){
    Animal.update({ _id: req.params.id}, req.body, function(err,result) {
        if(err) {
            console.log(err);
        }
        res.redirect('/');
    });
});


//delete 
app.post('/:id/delete', function(req, res) {
    Animal.remove({ _id: req.params.id}, function(err,result) {
        console.log("deleted animal")
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})