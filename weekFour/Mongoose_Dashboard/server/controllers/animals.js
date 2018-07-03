const Animal = require("../models/animal.js");

const mongoose = require('mongoose');

//export to routes
module.exports = {
    
    index: function(req, res) {
       	let animalHere;
    	query = Animal.find({}, function(err,animals){
        animalHere = animals; 
        res.render("index", {animals: animalHere});
	    });
    },

    get_animals: function(req,res){
         res.render('new');
    },

    post_animal: function(req, res) {
       	console.log("POST DATA", req.body);
	    let animal = new Animal(req.body);
	    animal.save()
	        .then(animal => {
	            //success
	            console.log(animal);
	            req.flash('success', 'successfully added to the database!');
	            res.redirect('/');
	        })
	        .catch(error => {
	            //handle error  
	           const errors = Object.keys(error.errors).map(key => {
	                return error.errors[key].message; 
	                res.redirect('/');
	            }); 
	        }); 
	},

	show_animal: function(req,res) {
		 Animal.findById(req.params.id, function(err,animal){
	        res.render('show', {animal: animal });
	    });
	},

	find_animal: function(req,res) {
		 Animal.findById(req.params.id, function(err, animal) {
	        res.render('edit', { animal: animal });
	  	});
	},

	update_animal: function(req,res) {
		Animal.update({ _id: req.params.id}, req.body, function(err,result) {
	        if(err) {
	            console.log(err);
	        }
	        res.redirect('/');
	    });
	},
	
	delete_animal: function(req,res) {
		 Animal.remove({ _id: req.params.id}, function(err,result) {
	        console.log("deleted animal")
	        if(err){
	            console.log(err);
	        }
	        res.redirect('/');
	    });
	}


}

