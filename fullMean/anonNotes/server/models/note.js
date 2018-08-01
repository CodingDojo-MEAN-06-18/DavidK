const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({

  note: {
    type: String,
    required: true
  }
},
{ timestamps: true });

module.exports = mongoose.model('note', noteSchema);
