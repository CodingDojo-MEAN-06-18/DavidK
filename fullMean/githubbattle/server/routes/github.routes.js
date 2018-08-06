const { GitHubController } = require('../controllers');

module.exports = require('express').Router()
  .post('/battle', GitHubController.battle)
  .get('/grab', GitHubController.grab);

