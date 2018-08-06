const router = require('express').Router();
const path = require('path');


// catch all routes and send html file
router.all('*', function (_request, response) {
  response.sendFile(path.resolve('dist/githubbattle/index.html'))
});

module.exports = router;
