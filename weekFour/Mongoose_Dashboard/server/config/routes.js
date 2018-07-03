const animals = require('../controllers/animals.js')

module.exports = function (app){
		
	//routes from controller 
	app.get('/', function(req, res) { 
		animals.index(req,res);
	});

	app.get('/new', function(req,res) {
	    animals.get_animals(req,res);
	})

	app.post('/', function(req,res) {
	    animals.post_animal(req,res);
	});


	app.get('/:id', function(req,res) {
	   animals.show_animal(req,res);
	});

	app.get('/:id/edit/', function(req, res){
	    animals.find_animal(req,res);
	});

	//update
	app.post('/:id', function(req,res){
	    animals.update_animal(req,res);
	});

	//delete 
	app.post('/:id/delete', function(req, res) {
	   animals.delete_animal(req,res);
	});





};