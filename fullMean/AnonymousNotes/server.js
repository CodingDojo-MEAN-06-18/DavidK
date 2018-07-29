const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const flash = require('express-flash')

require('./server/config/database');

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())


  .use(express.static(path.join(__dirname, 'dist')))


  .use('/api', require('./server/routes'));
