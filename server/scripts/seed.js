const mongoose = require('mongoose');
const mascots = require('./mascots.json');

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
  await Mascot.insertMany(mascots);
  console.log('Filling Database');
};

seed().then(() => {
  mongoose.connection.close();
  console.log('Database Connection Closed');
});
