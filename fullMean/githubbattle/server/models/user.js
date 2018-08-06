const mongoose = require('mongoose')

module.exports = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  score: {
    type: Number,
    required: [true, 'Score is required']
  },
  image: {
    type: String,
    required: [true, 'Image is required']
  }

}, { timestamps: true }));
