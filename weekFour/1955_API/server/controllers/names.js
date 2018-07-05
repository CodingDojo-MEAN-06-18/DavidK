const name = require("mongoose").model("Name");



module.exports = {

	index(req, res){
       	name.find({}, function(err,name){
       		if(err){
       			console.log("something went wrong", err);
       			res.json({message: "Error", error: err});
       		} else {
       			res.json({message: "Success", data: name});
       		}
       	});
    },

    show(req,res){
	    name.findOne({ name: req.params.name })
        .then( person => {
            res.json(person);
        })
        .catch( error => {
            console.log("Get One Error: ", error);
            res.json(error);
        });
    },

    create: function(req, res) {
    	name.create({ name: req.params.name })
        .then( person => {
            res.redirect('/' + person.name);
        })
        .catch( error => {
            console.log("Add One Error: ", error);
            res.json(error);
        });
	},

	destroy: function(req,res) {
		name.deleteOne({ name: req.params.name })
        .then( person => {
            res.redirect('/');
        })
        .catch( error => {
            console.log("Remove One Error: ", error);
            res.json(error);
        });
    },


}