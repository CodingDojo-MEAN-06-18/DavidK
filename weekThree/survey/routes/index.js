module.exports = function Route(app, server){
	//this gets the socket io module 
	var io = require('socket.io').listen(server)
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	});

	//listen to connection even from the client side
	io.sockets.on('connection', function (socket){
		//server listens to "posting_form" event
		socket.on("post_form", function (data){
			var random_number = Math.floor((Math.random() * 10) + 1);
			//emit the data to the client
			io.emit('updated_message', {response:data});
			io.emit('random_number', {response: random_number});
		})
	})


	// app.post('/process', function(req,res) {
	// 	var formdata = {
	// 		name : req.body.name,
	// 		location : req.body.location,  
	// 		language : req.body.language,   
	// 		comment : req.body.comment, 
	// 	}
	// 	res.render('form', formdata );
	// });

};