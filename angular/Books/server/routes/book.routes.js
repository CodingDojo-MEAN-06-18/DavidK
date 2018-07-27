const { bookController } = require('../controllers');
//non barrelling way to access controllers
// const bookController = require('../controllers/book.controller');

const router = require('express').Router();

module.exports = router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .get('/:book_id', bookController.show)
  .put('/:book_id', bookController.update)
  .delete('/:book_id', bookController.destroy);

