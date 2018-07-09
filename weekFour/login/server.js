const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000},
}));

session.login = false;
session.user = '';

const flash = require('express-flash');
app.use(flash());

const bcrypt = require('bcrypt-as-promised');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log('Listening on Port 8000');
});