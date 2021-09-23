const mongoose = require('mongoose');

const db = 'mongodb://localhost:27017/mascots';

mongoose.connect(db, (err) => {
  if (err) console.log(err);
  console.log(`Connected to database 🎉`);
});

module.exports = mongoose;
