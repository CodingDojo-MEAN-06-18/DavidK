const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  flash = require('express-flash'),
  app = express();

app.use(express.static(path.join(__dirname, '/dist/teamManager')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("Running in port 8000");
});
