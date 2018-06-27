const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const server = app.listen(8000);
const io = require('socket.io')(server);

app.get('/', function(req, res) {
    
  res.render('index');
  
  });

var counter = 1;
var messages = [];
var users = [];
function isUser(user){
  const usersCount = users.length;

  for (var i = 0; i < usersCount; i++){
    if(user==users[i]){
      return true;
    }
  
  return false
  }


io.on('connection', function (socket) {
  socket.on('got_a_new_user', function(data) {
    // let message = "<li class = 'connected'>";
    // message += `${data.name} has connected.`;
    // message += "</li>";
    
    const existingUser = isUser(data.user);
    const event = existingUser ? 'existing_user' : 'load_messages';
    const data = existingUser ? {
                    error: "This user already exits"
                  } : { current_user: data.user, messages: messages };

    if (!existingUser) {
      users.push(data.user);
    }

    socket.emit(event, data);
  }); 

  socket.on('new_message', function(data) {
    // let message = "<li class = 'message'>";
    // message += `<span class="name">${data.name}</span>: ${data.message}`;
    // message += "</li>";
    messages.push({name:data.user, message: data.message});
    io.emit('display_message', {new_message: data.message, user: data.user});
  });
  



  socket.on('disconnect', function(data) {
    let message = "<li class = 'connected'>";
    message += `${data.name} has disconnected.`;
    message += "</li>";
    socket.broadcast.emit('connection', {message: message});
  });

});