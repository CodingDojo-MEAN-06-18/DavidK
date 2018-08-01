const notes = require('../controllers/notes.controller.js')
const path = require('path');

module.exports = app => {
    app.post('/add', (req, res, next) => notes.add(req, res, next));
    app.get('/grab', (req, res, next) => notes.grab(req, res, next));
    app.all('*', (req, res, next) => notes.index(req, res, next));
}

