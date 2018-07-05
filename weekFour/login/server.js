// Configuration
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
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000},
}));

// default session login value:
session.login = false;
session.user = '';

const flash = require('express-flash');
app.use(flash());

const bcrypt = require('bcrypt-as-promised');

// // Database Connection
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/loginreg');
// console.log('Mongoose connected');

// // Database Schema
// const UserSchema = new Schema({
//     first_name: {
//         type: String,
//         required: [true, "First name cannot be blank!"]
//     },
//     last_name: {
//         type: String,
//         required: [true, "Last name cannot be blank!"]
//     },
//     email: {
//         type: String,
//         unique: [true, "Email is taken!"],
//         required: [true, "Email is required!"]
//     },
//     password: {
//         type: String,
//         required: [true, "Password cannot be blank!"],
//         minLength: [6, "Password must be at least six characters!"]
//     },
//     birthday: {
//         type: Date,
//         required: [true, "Birthday is required!"]
//     }
// }, {timestamps: true});

// const User = mongoose.model('User', UserSchema);

// Routes
// app.get('/', function(req, res) {
//     res.render('index' , {expressFlash: req.flash('success')});
// });

// app.get('/user/dashboard', function(req, res) {
//     if (session.login == false) {
//         console.log("You don't have persmission!");
//         res.redirect('/');
//     } else {
//         res.render('dashboard', {user_info: session.user, expressFlash: req.flash('success')});
//     }
// });

// app.post('/user/add', function(req, res) {
//     let data = req.body;

//     bcrypt.hash(req.body.password, 10)
//         .then(hashed_password => {
//             data.password = hashed_password;
            
//             User.create(data, function(err, user){
//                 if (err) {
//                     // console.log(err);
//                     for (var key in err.errors) {
//                         req.flash('success', err.errors[key].message);
//                     }
//                     res.redirect('/');
//                 } else {
//                     console.log('User created!', user);
//                     session.user = user;
//                     session.login = true;
//                     console.log(session.login, session.user);
//                     res.redirect('/user/dashboard');
//                 }
//             });
//         })
//         .catch(error => {
//             console.log(error);
//             res.redirect('/');
//         });
// });

// app.post('/user/login', function(req, res) {
//     User.find({email: req.body.login_email}, function(err, user){
//         if (user.length < 1) {
//             console.log('User not found');
//             req.flash('success', 'User not found.');
//             res.redirect('/');
//         } else {
//             bcrypt.compare(req.body.login_password, user[0].password)
//             .then(result => {
//                 if (result == true) {
//                     console.log('login successful');
//                     session.user = user[0];
//                     session.login = true;
//                     req.flash('success', 'Login Successful.');
//                     res.redirect('/user/dashboard');
//                 } else {
//                     console.log('User password incorrect');
//                     req.flash('success', 'Wrong password.');
//                     res.redirect('/');
//                 }
//             })
//             .catch(error => {
//                 console.log(error);
//                 res.redirect('/');
//             });
//         }
//     });
// });

// app.get('/user/logout', function(req, res) {
//     req.session.destroy();
//     session.login = false;
//     session.user = '';
//     res.redirect('/');
// });



// Mongoose: schema, models
require('./server/models/user.js');


require('./server/config/routes.js')(app);



// Server Port
app.listen(8000, function() {
    console.log('Listening on Port 8000');
});