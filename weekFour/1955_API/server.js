const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/database');
require('./server/config/routes')(app);

// Setting our Server to Listen on Port: 8000
const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

