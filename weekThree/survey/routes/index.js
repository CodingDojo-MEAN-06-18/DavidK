module.exports = function Route(app){

	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		
		res.render("index");
	});

	app.post('/process', function(req,res) {
		var formdata = {
			name : req.body.name,
			location : req.body.location,  
			language : req.body.language,   
			comment : req.body.comment, 
		}
		res.render('form', formdata );
	});

}