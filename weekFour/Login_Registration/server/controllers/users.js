const User = require("../models/user.js");




//export to routes
module.exports = {
    
    index: function(req, res) {
       	if(req.session.userID){
    		res.redirect('/users');
  		} else {
    		res.render("index");
   		}
    },


    get_users: function(req,res){
       	if(req.session.userID){
       		User.findById(req.session.userID)
        	.then(user => {
            	res.render("users", {user:user});
        	}).catch(error => {
            	console.log("Error: ", error);
            	res.redirect('/');
        	});
    	} else {
        	res.redirect('/');
    	}
    },

   
    post_newuser: function(req, res) {
       	console.log("POST DATA", req.body);
    	User.findOne({ email: req.body.email }).then( found_user => {
        	if (found_user) {
           	 	req.flash('newUser', "A user with that email already exists!");
            	res.redirect('/');
        	}
    	}).catch( error => {
        	console.log(error);
        	req.flash('newUser', "A user with that email already exists!");
        	res.redirect('/');
    	});
    	bcrypt.hash(req.body.password, 10).then( hashed_password => {
        	req.body.password = hashed_password;
       		User.create(req.body).then( user => {
           		req.session.userID = user.id;
            	res.redirect("/users");
       		 }).catch( error => {
           		console.log("Error: ", error);
            	for (let key in error.errors) {
                	req.flash('newUser', error.errors[key].message);
            	}
            	res.redirect("/");
        		});
    		}).catch( error => {
        		console.log("Error: ", error);
    		});
	},

	login_user: function(req,res) {
		
   	 	User.findOne({ email: req.body.email }).then( user => {
       		if (!user) {
            	req.flash('login', "That email/password combo is incorrect.");
            	res.redirect('/');
        	}
        	bcrypt.compare(req.body.password, user.password).then( result => {
            	if (result) {
                	req.session.userID = user.id;
                	res.redirect("/users");
            	} else {
                	req.flash('login', "That email/password combo is incorrect.");
                	res.redirect("/");
            	}
        	}).catch( error => {
            	console.log("Error: ", error);
            	req.flash('login', "That email/password combo is incorrect.");
            	res.redirect("/");
        	});
    		}).catch((error) => {
       	 		console.log("Error: ", error);
        		for (let key in error.errors) {
            	req.flash('login', error.errors[key].message)
        	}
        	res.redirect("/");
    		});
	},

	logout_user: function(req,res) {
    	req.session.destroy();
    	res.redirect('/');
	},

}

