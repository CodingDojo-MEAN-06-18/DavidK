const Bike = require('mongoose').model('Bike');

module.exports = {
  // get all resource
  index(request, response) {
    Bike.find({})
      .then(bikes => response.json(bikes))
      .catch(console.log);
  },
  // create
  create(request, response) {
    Bike.create(request.body)
      .then(bike => response.json(bike))
      .catch(error => {
        response
          .status(500)
          .json(
            Object.keys(error.errors).map(key => error.errors[key].message)
          );
      });
  },
  // get one
  show(request, response) {
    Bike.findById(request.params.bike_id)
      .then(bike => response.json(bike))
      .catch(console.log);
  },
  // update
  update(request, response) {
    Bike.findByIdAndUpdate(request.params.bike_id, request.body, { new: true })
      .then(bike => response.json(bike))
      .catch(console.log);
  },
  // destroy
  destroy(request, response) {
    Bike.findByIdAndRemove(request.params.bike_id)
      .then(bike => response.json(bike))
      .catch(console.log);
  },
};
