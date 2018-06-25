module.exports = function Route(app, server){
	//this gets the socket io module 
	
	var io = require('socket.io').listen(server)
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	});

	
}


