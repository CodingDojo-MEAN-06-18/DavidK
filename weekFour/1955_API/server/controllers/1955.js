const Person = require("../models/person.js");



module.exports = {

	index: function(req, res) {
       	// Person.find({})
       	// 	.then(people => res.json(people))
       	// 	.catch(error => res.json(error));
       	Person.find({})
        .then( persons => {
            res.json(persons);
        })
        .catch( error => {
            console.log("Get All Error: ", error);
            res.json(error);
        });
    },

    show: function(req,res){
      //   Person.findOne(req.params)
	    	// .then(person => {
	     // 		res.json(person ? person : 'no such person existed in 1955');
	     // 	})
	     // 	.catch(error => res.json(error));
	    Person.findOne({ name: req.params.name })
        .then( person => {
            res.json(person);
        })
        .catch( error => {
            console.log("Get One Error: ", error);
            res.json(error);
        });
    },

    create: function(req, res) {
    	// Person.create(req.params)
    	// 	.then(person => res.json(person))
    	// 	.catch(error => res.json(error));

    	Person.create({ name: req.params.name })
        .then( person => {
            res.redirect('/' + person.name);
        })
        .catch( error => {
            console.log("Add One Error: ", error);
            res.json(error);
        });
	},

	destroy: function(req,res) {
	// 	Person.remove(req.params)
	// 		.then(person => res.json(person))
	// 		.catch(error => res.json(error));
	// },
		Person.deleteOne({ name: req.params.name })
        .then( person => {
            res.redirect('/');
        })
        .catch( error => {
            console.log("Remove One Error: ", error);
            res.json(error);
        });
    },

	
	

}