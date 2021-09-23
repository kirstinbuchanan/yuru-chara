const mongoose = require('./model.index');

const mascotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  japanese: {
    type: String,
    required: false,
  },
  mascot: {
    type: String,
    required: false,
  },
  prefecture: String,
  City: String,
  Description: {
    type: String,
    required: false,
  },
  status: String,
  'official site': String,
  picture: String,
});

const Mascot = mongoose.model('mascots', mascotSchema);

module.exports = Mascot;
