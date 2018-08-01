const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost:27017/anonNotes', { useNewUrlParser: true });

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});

