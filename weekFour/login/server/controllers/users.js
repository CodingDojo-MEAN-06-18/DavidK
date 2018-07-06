const mongoose = require('mongoose');
const User = require('mongoose').model('User') //getter
const express = require('express');
const app = express();
const bcrypt = require("bcrypt-as-promised");
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
	    	User.findById(req.session.userID).then(user => {
	    		res.render('dashboard', {user: session.user});
	    	})
	       
	    }
	},

	new: function(req,res) {
		let data = req.body;
		console.log(data);
		console.log(req.body.password);
	    bcrypt.hash(req.body.password, 10)
	        .then(hashed_password => {
	            data.password = hashed_password;
	            
	            User.create(data, function(err, user){
	                if (err) {
	 
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

		User.findOne({email: req.body.login_email}) 
	        .then( user => {
	        	if(!user) {
	        		req.flash('success', 'that email password combo doesnt exist')
	        		res.redirect('/');
	        	}
	        	console.log(user);
	        	bcrypt.compare(req.body.login_password, user.password)
	            .then(result => {
	                if (result) {
	                    console.log('login successful');
	                    req.session.userID= user.id;
	                    session.login = true;
	                    res.render('dashboard', {user:user});
	                } else {
	                    console.log('User password incorrect');
	                    req.flash('success', 'Wrong password.');
	                    res.redirect('/');
	                }
	            })
	            .catch( error => {
            	console.log("Error: ", error);
            	req.flash('success', "That password does not match the one in our database.");
            	res.redirect("/");
            	});
	        	})
	            .catch(error => {
	                console.log(error);
	                for (let key in error.errors){
	                	req.flash('success', error.errors[key].message)
	                }
	                res.redirect('/');
	            });	
	},

	logout_user: function(req,res){
		req.session.destroy();
	  	session.login = false;
	    session.user = '';
	    res.redirect('/');
	}

}


