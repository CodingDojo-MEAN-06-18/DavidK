const mongoose = require('mongoose');
const User = mongoose.model('User') //getter
// const User = require("../models/user.js");
const express = require('express');

const app = express();
const bCrypt = require('bcrypt-as-promised');
const session = require("express-session")
const flash = require('express-flash');

app.use(flash());

app.use(session({
    secret: 'mypassword',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));

//export to routes
module.exports = {
    
    index(req, res) {
       	if(req.session.userID){
    		res.redirect('/users');
  		} else {
    		res.render("index");
   		}
    },


    get_users: function(req,res){
       		User.findOne({email:req.session.email},function(err,user){
                if(err){
                    console.log(err);
                    res.redirect('/')
                } else {
                    res.render('users', {user:user})
                }
            })

        	
    },

   
    post_newuser: function(req, res) {
        User.create(req.body)
            .then(user => {
                //log into session
                req.session.userID = user.id
                res.redirect('/');
            })
            .catch(error => {
                //handle error
                console.log("Error: ", error);
                res.redirect('/');
            })
     //   	console.log("POST DATA", req.body);
    	// User.findOne({ email: req.body.email }).then( is_user => {
     //        if (is_user) {
     //            res.redirect('/');
     //        }
     //    }).catch( error => {
     //        console.log(error);
     //        res.redirect('/');
     //    });
     //    bcrypt.hash(req.body.password, 10).then( hashed_password => {
     //        req.body.password = hashed_password;
     //        User.create(req.body).then( user => {
     //            req.session.userID = user.id;
     //            res.redirect("/users");
     //        }).catch( error => {
     //            console.log("Error: ", error);
     //            for (let key in error.errors) {
     //                req.flash('newUser', error.errors[key].message);
     //            }
     //            res.redirect("/");
     //        });
     //    }).catch( error => {
     //        console.log("Error: ", error);
     //    });
	},

	login_user: function(req,res) {
   	 	User.findOne({ email: req.body.email })
            .then( userInfo => {
       		   if (!userInfo) {
            	   throw new Error();
                }
            	return User.validatePassword(req.body.password, userInfo.password)
                    .then( ()=> {
                        //add session id
                        req.session.userID = userInfo.id
                    })

        	})
            .catch( error => {
                //render error
                // res.render('/', { error: 'user password combo doesn\'t exist'})
                redirect('/');
            })
    },



      //   	bcrypt.compare(req.body.password, user.password).then( result => {
      //       	if (result) {
      //           	req.session.userID = user.id;
      //           	res.redirect("/users");
      //       	} else {
      //           	req.flash('login', "That email/password combo is incorrect.");
      //           	res.redirect("/");
      //       	}
      //   	}).catch( error => {
      //       	console.log("Error: ", error);
      //       	req.flash('login', "That email/password combo is incorrect.");
      //       	res.redirect("/");
      //   	});
    		// }).catch((error) => {
      //  	 		console.log("Error: ", error);
      //   		for (let key in error.errors) {
      //       	req.flash('login', error.errors[key].message)
      //   	}
      //   	res.redirect("/");
    		// });
	// },

	logout_user: function(req,res) {
    	req.session.destroy();
    	res.redirect('/');
	},

}

