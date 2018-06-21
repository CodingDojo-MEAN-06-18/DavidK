module.exports = function Route(app){

	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		if(!req.session.randomNum){
			req.session.randomNum = Math.floor(Math.random()* 11 + 1);
		}
		if(!req.session.answer){
			req.session.answer = "Take a guess";
		}

	res.render('index', {answer:req.session.answer});
	
	});

	//route to process the guess
	app.post('/process', function(req,res) {
		if(req.body.guess > req.session.randomNum){
			req.session.answer = "Too high";
		}
		else if(req.body.guess < req.session.randomNum) {
			req.session.answer = "Too low";
		}
		else {
			req.session.answer = "that was the number!";
		}
		res.redirect('/');
	});

	//route to clear data and start again
	app.post('/clear', function(req,res){
		req.session.destroy();
		res.redirect('/');
	})
}




	

