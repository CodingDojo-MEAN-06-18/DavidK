const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
  response.sendFile(path.resolve('dist/bicycleMarket/index.html'));
});

module.exports = router;

