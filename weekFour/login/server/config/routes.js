const users = require('../controllers/users');

module.exports = function (app){

	app.get('/', users.index);

	app.get('/user/dashboard', users.show); 
	// app.get('/user/dashboard', function(req, res){
	// 	users.get_users(req,res);
	// });

	app.post('/user/add', users.new);
	// app.post('/user/add', function(req,res) {
	//     users.post_newuser(req,res);
	// });

	app.post('/user/login', users.login_user);
	// app.post('/user/login', function(req,res) {
	//    users.login_user(req,res);
	// });

	app.get('/user/logout', users.logout_user); 
	// app.post('/user/logout', function(req, res){
	//     users.logout_user(req,res);
	// });
}
