//using node with express 
const express = require('express');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/static/index.html");
})

app.get('/cars', function(request, response) {
    response.render('cars');
})

app.get('/cats', function(request, response) {
    response.render('cats');
})
app.get('/cars/new' , function(request, response) {
    response.render('form');
})
app.get('/cuddles', function(request,response) {
    var cat_array = [
        {name: "cuddles", food: "spaghetti", age: "21", spots: "behind the sofa"},
    ];
    response.render('users', {users: cat_array});
})
app.get('/garfield', function(request,response) {
    var cat_array = [
        {name: "garfield", food: "pizza", age: "40", spots: "on the bed"}
    ];
    response.render('users', {users: cat_array});
})
app.get('/unicat', function(request,response) {
    var cat_array = [
        {name: "unicat", food: "popcorn", age: "5", spots: "next to the bookshelf"}
    ];
    response.render('users', {users: cat_array});
})
app.listen(8000, function() {
    console.log("listening on 8000");
})