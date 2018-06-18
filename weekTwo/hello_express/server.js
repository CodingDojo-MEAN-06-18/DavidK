const express = require('express');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine' , 'ejs'); 

app.get('/users', function(request,response) {
	var users_array = [
		{name: "Michael", email: "michael@codingdojo.com"},
		{name: "Jay", email: "jayl@codingdojo.com"},
		{name: "Brandon", email: "brandon@codingdojo.com"},
		{name: "Andrew", email: "drew@codingdojo.com"}

	];
	response.render('users', {users: users_array});
})

app.get('/', function(request, response) {
	response.send("<h1>Hello express!!!!!!!</h1>");
	console.log(request);

})

app.use(express.static(__dirname + "/static"));

app.listen(8000, function() {
	console.log("listening on 8000");
})