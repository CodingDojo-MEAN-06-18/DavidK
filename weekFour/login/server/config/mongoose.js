

const mongoose = require('mongoose');

const fs = require('fs');
const path = require('path');
const reg = new RegExp('\\.js$', 'i')// lowercase 'i' means case insensitive 
const modelsPath = path.join(__dirname, '../models'); //starts from current dir
// const modelsPath = path.resolve('server/models');  starts from process root



mongoose.connect('mongodb://localhost/loginreg_db');
// mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(file => {
	if(reg.test(file)){
		require(path.join(modelsPath, file));
	}
})