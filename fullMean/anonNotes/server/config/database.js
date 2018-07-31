const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const reg = new RegExp('\\.js$', 'i'); // match .js file ext case insensitive
const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/notes', { });

mongoose.connection.on('connected', () => console.log('we are connected to mongodb'));


// mongoose.Promise = global.Promise;


fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));
    }
});
