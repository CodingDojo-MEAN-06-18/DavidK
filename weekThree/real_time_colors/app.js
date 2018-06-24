
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var bodyParser = require('body-parser');
// create the express app
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// tell the express app to listen on port 8000
var server = app.listen(8000, function(){
	console.log("listening on port 8000");
});
// routes/index.js handles all routing
var route = require('./routes/index.js')(app, server);


