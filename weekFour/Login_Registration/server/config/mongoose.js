

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loginreg_db');
mongoose.Promise = global.Promise;

module.exports = mongoose;

