// const { bookController } = require('../controllers');
//non barrelling way to access controllers
 const noteController = require('../controllers/note.controller');

const router = require('express').Router();

module.exports = router
  .get('/notes', noteController.getAll)
  .all('*', noteController.index)
  .post('/notes', noteController.newNote)


