const persons = require('../controllers/1955.js')

module.exports = function (app){
		
	//routes from controller 
	app.get('/', function(req, res) { 
		persons.index(req,res);
	});

	app.get('/new/:name/', function(req,res) {
	    persons.create(req,res);
	});

	app.get('/remove/:name/', function(req,res) {
	   persons.destroy(req,res);
	});

	app.get('/:name', function(req, res){
	    persons.show(req,res);
	});

};