const noteController = require('../../controllers/notes.controller');

const router = require('express').Router();

module.exports = router
    .get('/', noteController.index)
    .post('/', noteController.create);










