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
app.listen(8000, function() {
    console.log("listening on 8000");
})



//using node without express library 
// var http = require('http');

// var fs = require('fs');

// var server = http.createServer(function (request, response){

//     console.log('client request URL: ', request.url);

//     if(request.url === '/cars') {
//         fs.readFile('views/index.html', 'utf8', function (errors, contents){
//             response.writeHead(200, {'Content-Type': 'text/html'});  
//             response.write(contents);  
//             response.end(); 
//         });
//     }
//     else if(request.url === '/images/car1.png'){
//         fs.readFile('./images/car1.png', function(errors, contents){
//             response.writeHead(200, {'Content-type': 'image/png'});
//             response.write(contents);
//             response.end();
//         })
//     }
//     else if(request.url === '/cats') {
//         fs.readFile('views/cats.html', 'utf8', function( errors, contents) {
//             response.writeHead(200, {'Content-Type' : 'text/html'});
//             response.write(contents);
//             response.end();
//         });
//     }
//     else if(request.url === '/images/cat.jpg'){
//         fs.readFile('./images/cat.jpg', function(errors, contents){
//             response.writeHead(200, {'Content-type': 'image/jpg'});
//             response.write(contents);
//             response.end();
//         })
//     }
//     else if(request.url === '/cars/new') {
//         fs.readFile('views/form.html', 'utf8', function( errors, contents) {
//             response.writeHead(200, {'Content-Type' : 'text/html'});
//             response.write(contents);
//             response.end();
//         });
//     }
//     else if(request.url === '/stylesheets/style.css'){
//         fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'text/css'});
//         response.write(contents);
//         response.end();
//         });
//     }
  
//     else {
//         response.writeHead(404);
//         response.end('File not found!!!');
//     }
// });

// server.listen(6789);

// console.log("We Running localhost at port 6789 yallll");
