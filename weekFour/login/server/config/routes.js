const users = require('../controllers/users');

module.exports = function (app){

	app.get('/', function(req, res) {
		users.index(req,res);
	});

	app.get('/user/dashboard', function(req, res){
		users.get_users(req,res);
	});

	app.post('/users/add', function(req,res) {
	    users.post_newuser(req,res);
	});

	app.post('/user/login', function(req,res) {
	   users.login_user(req,res);
	});

	app.post('/user/logout', function(req, res){
	    users.logout_user(req,res);
	});
}
