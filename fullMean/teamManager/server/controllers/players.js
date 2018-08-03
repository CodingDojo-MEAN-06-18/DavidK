const Player = require('../models/player.js');
const path = require('path');

module.exports = {
  index: (req, res, next) =>
    res.sendFile(path.resolve("./dist/teamManager/index.html")),

  addPlayer: (req, res, next) => {
    Player.create(req.body)
      .then(player => { res.json(player) })
      .catch(error => {
        const errors = Object.keys(error.errors)
          .map(key => error.errors[key].message);
        res.json(errors);
      });
  },

  deletePlayer: (req, res, next) => {
    Player.findByIdAndRemove(req.body.id)
      .then(player => { res.json(player); })
      .catch(error => {
        const errors = Object.keys(error.errors)
          .map(key => error.errors[key].message);
        res.json(errors);
      });
  },

  getPlayers: (req, res, next) => {
    Player.find({})
      .then(players =>  res.json(players) )
      .catch(error => {
        const errors = Object.keys(error.errors)
          .map(key => error.errors[key].message);
        res.json(errors);
      });
  },

  updateStatus: function (req, res, next) {
    const update = { "$set": {} }
    update["$set"]["status." + req.body.game] = req.body.setValue;
    Player.findOneAndUpdate({"_id": req.body.id}, update)
      .then(player => { res.json(player); })
      .catch(error => {
        const errors = Object.keys(error.errors)
          .map(key => error.errors[key].message);
        res.json(errors);
      });
  }
}
