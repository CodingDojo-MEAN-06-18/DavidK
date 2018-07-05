const mongoose = require('mongoose');

const name = mongoose.model('Name');
const nameController = require('../controllers/names');

module.exports = function (app){
		
	//routes from controller 
	app.get('/', nameController.index);
	

	app.get('/new/:name/', nameController.create);


	app.get('/remove/:name/', nameController.destroy);


	app.get('/:name', nameController.show);
};