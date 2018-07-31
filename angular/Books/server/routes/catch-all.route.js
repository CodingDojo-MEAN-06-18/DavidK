const router = require('express').Router();
const path = require('path');

//match all types of request verbs .  server aspect

router.all('*', function (_request, response) {
  response.sendFile(path.resolve('dist/index.html'))
  // response.sendFile(path.join(_dirname, '../../dist/index.html'))
});

module.exports = router;
