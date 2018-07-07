const Name = require("mongoose").model("Name");


module.exports = {

  index(req, res){
    Name.find({})
      .then(name => res.json(name))
      .catch(error => res.json(error));
  },

  show(req,res){
	 Name.findOne(req.params)
    .then( name => {
      res.json(name ? name: 'no such person existed in 1955');
    })
    .catch( error => res.json(error));   
  },

  create(req, res) {
    Name.create(req.params)
      .then( name => res.json(name))
      .catch( error => res.json(error));
  },
	
  destroy(req,res) {
    Name.remove(req.params)
      .then( name => res.json(name))
      .catch( error => res.json(error));
  },
    

};