const { authController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/info/:user_id', authController.index)
  .post('/login', authController.login)
  .post('/register', authController.register)
  .delete('/logout', authController.logout);

