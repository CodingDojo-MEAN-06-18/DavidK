module.exports = function Route(app, server){
	//this gets the socket io module 
	var counter = 0;
	var io = require('socket.io').listen(server)
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	});

	//listen to connection even from the client side
	io.sockets.on('connection', function (socket){
		socket.on('change_green', function(data){
			io.emit('change_green');
		});

		socket.on('change_blue', function(data){
			io.emit('change_blue');
		});

		socket.on('change_pink', function(data){
			io.emit('change_pink');
		});
	})
};