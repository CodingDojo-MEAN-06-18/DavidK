const Name = require("mongoose").model("Name");


module.exports = {

	index(req, res){
       	Name.find({}, function(err,name){
       		if(err){
       			console.log("something went wrong", err);
       			res.json({message: "Error", error: err});
       		} else {
       			res.json({message: "Success", data: name});
       		}
       	});
    },

    show(req,res){
	    Name.findOne(req.params)
        .then( name => {
            res.json(name);
        })
        .catch( error => {
            console.log("Get One Error: ", error);
            res.json(error);
        });
    },

    create: function(req, res) {
    	Name.create(req.params)
        .then( name => {
            res.redirect('/' + name.name);
        })
        .catch( error => {
            console.log("Add One Error: ", error);
            res.json(error);
        });
	},

	destroy: function(req,res) {
		Name.deleteOne(req.params)
        .then( name => {
            res.redirect('/');
        })
        .catch( error => {
            console.log("Remove One Error: ", error);
            res.json(error);
        });
    },


}