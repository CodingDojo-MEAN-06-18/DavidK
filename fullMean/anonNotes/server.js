const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const app = express();


require('./server/config/database');

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'dist')))
  .use('/api', require('./server/config/routes'))
  .use(require('./server/config/routes/catch-all.route'));


app.listen(port, () => console.log(`Hello Express server be on port ${port}`));
