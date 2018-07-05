const mongoose = require('mongoose'),
    path = require('path'),
    reg = new RegExp('\\.js$', 'i'),
    fs = require("fs"),
    modelsPath = path.resolve('server', 'models');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:8000/1955_api');

fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)){
        require(path.join(modelsPath, file));
    }
});