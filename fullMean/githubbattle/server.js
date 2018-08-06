const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(express.static(require('path').join(__dirname, './dist/githubbattle')))
    .use(bodyparser.urlencoded({ extended: true }))
    .use(bodyparser.json())
    .use('/api', require('./server/routes'))
    .use(require('./server/routes/catchall.route'))
    .listen(8000, () => console.log('listening on port 8000'));

require('./server/config/database.js');

