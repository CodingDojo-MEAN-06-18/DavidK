const mongoose = require('mongoose');
const User = require('mongoose').model('User') //getter
// const User = require("../models/user.js");
const express = require('express');

const app = express();
const bcrypt = require("bcrypt");
const session = require("express-session")
const flash = require('express-flash');

app.use(flash());

app.use(session({
    secret: 'mypassword',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));

module.exports = {

	index: function(req, res) {
    	res.render('index' , {expressFlash: req.flash('success')});
	},
	
	show: function(req, res) {
	    if (session.login == false) {
	        console.log("You don't have persmission!");
	        res.redirect('/');
	    } else {
	        res.render('dashboard', {user_info: session.user, expressFlash: req.flash('success')});
	    }
	},

	new: function(req,res) {
		let data = req.body;

	    bcrypt.hash(req.body.password, 10)
	        .then(hashed_password => {
	            data.password = hashed_password;
	            
	            User.create(data, function(err, user){
	                if (err) {
	                    // console.log(err);
	                    for (var key in err.errors) {
	                        req.flash('success', err.errors[key].message);
	                    }
	                    res.redirect('/');
	                } else {
	                    console.log('User created!', user);
	                    session.user = user;
	                    session.login = true;
	                    console.log(session.login, session.user);
	                    res.redirect('/user/dashboard');
	                }
	            });
	        })
	        .catch(error => {
	            console.log(error);
	            res.redirect('/');
	        });
	},

	login_user: function(req,res) {

		User.findOne({email: req.body.login_email} 
	        .then(userInfo => {
	        	if(!userInfo) {
	        		throw new Error();
	        		res.redirect('/');
	        	}
	        	return bcrypt.compare(req.body.login_password, user[0].password)
	            .then(result => {
	                if (result == true) {
	                    console.log('login successful');
	                    session.user = user[0];
	                    session.login = true;
	                    req.flash('success', 'Login Successful.');
	                    res.redirect('/user/dashboard');
	                } else {
	                    console.log('User password incorrect');
	                    req.flash('success', 'Wrong password.');
	                    res.redirect('/');
	                }
	            })
	            .catch(error => {
	                console.log(error);
	                res.redirect('/');
	            });
	        
	   		 }));

	},

	logout_user: function(req,res){
		req.session.destroy();
	  	session.login = false;
	    session.user = '';
	    res.redirect('/');
	}

}


