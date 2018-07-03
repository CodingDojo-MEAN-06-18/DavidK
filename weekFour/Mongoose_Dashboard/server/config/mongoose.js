const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animal_db');
mongoose.Promise = global.Promise;

module.exports = mongoose;