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
		socket.on('epic', function(data){
			counter++;
			io.emit('change_message', counter);
		});

		socket.on('reset', function(data){
			counter = 0;
			io.emit('change_message', counter);
		});

	})
};