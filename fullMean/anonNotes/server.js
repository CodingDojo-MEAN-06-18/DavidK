const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const session = require("express-session")

const port = process.env.PORT || 8000;
const app = express();

// app.use(session({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }));


require('./server/config/database.js');

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'dist')))
  // .use('/api', require('./server/config/routes'))
  // .use(require('./server/config/routes/catch-all.route'));
  require('./server/config/routes.js')(app)

app.listen(port, () => console.log(`Hello Express server be on port ${port}`));
