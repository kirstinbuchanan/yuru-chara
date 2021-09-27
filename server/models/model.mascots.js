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
  city: String,
  description: {
    type: String,
    required: false,
  },
  status: String,
  officalSite: String,
  picture: String,
  favourite: {
    type: Boolean,
    defaultValue: false,
  },
});

const Mascot = mongoose.model('mascots', mascotSchema);

module.exports = Mascot;
