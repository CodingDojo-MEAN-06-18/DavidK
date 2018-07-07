const mongoose = require("mongoose"),
    path = require("path"),
    fs = require("fs"),
    reg = new RegExp('\\.js$', 'i'),
    modelsPath = path.join(__dirname, '../models');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Tasks');
mongoose.connection.on("connected", () => console.log("we are connected to Tasks database"));

fs.readdirSync(modelsPath).forEach(file =>{
    if (reg.test(file)){
        require(path.join(modelsPath, file));
    }
});