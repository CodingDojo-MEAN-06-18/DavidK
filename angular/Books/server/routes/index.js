const router = require('express').Router();
const bookRoute = require('./book.routes');


module.exports = router.use('/books', bookRoute);

