const users = require('../controllers/users.js')





module.exports = function (app){
		
	//routes from controller 
	app.get('/', function(req, res) { 
		users.index(req,res);
	});

	app.get('/users', function(req,res) {
	    users.get_users(req,res);
	});

	app.post('/users/new', function(req,res) {
	    users.post_newuser(req,res);
	});

	app.get('/login', function(req,res) {
	   users.login_user(req,res);
	});

	app.get('/logout', function(req, res){
	    users.logout_user(req,res);
	});

};