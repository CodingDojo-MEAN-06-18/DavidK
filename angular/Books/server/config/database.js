const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const reg = new RegExp('\\.js$', 'i');
// const modelsPath = path.resolve('server', 'models';)
const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost:27017/books',
  {
  useNewUrlParser: true,
  }
);
mongoose.connection.on('connected', () => console.log('connected to MongoDb!'));

//older version of mongoose less than 4
// mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
