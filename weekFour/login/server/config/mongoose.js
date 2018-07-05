const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const reg = new RegExp('\\.js$', 'i')// lowercase 'i' means case insensitive 
// const modelsPath = path.join(__dirname, '../models'); // join starts from current dir

// resolve starts from process root
const modelsPath = path.resolve('server/models');  


mongoose.connect('mongodb://localhost/loginreg');

mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(file => {
	if(reg.test(file)){
		require(path.join(modelsPath, file));
	}
});

