const mongoose = require('mongoose');
const Mascot = require('../models/model.mascots');
const mascots = require('./mascots.json');

mongoose
  .connect('mongodb://localhost:27017/mascots', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database Connected`);
  })
  .catch((err) => {
    console.log(err);
  });

const seed = async () => {
  await Mascot.deleteMany({});
  await Mascot.insertMany(mascots);
};

seed().then(() => {
  mongoose.connection.close();
});
