const mongoose = require('./model.index');

const favouriteSchema = new mongoose.Schema({
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
  officalSite: String,
  picture: String,
  favourite: Boolean,
});

const Favourite = mongoose.model('favourites', favouriteSchema);

module.exports = Favourite;