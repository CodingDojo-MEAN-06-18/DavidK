const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`listening on port ${port}`));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/config/mongoose');
require("./server/config/routes")(app);