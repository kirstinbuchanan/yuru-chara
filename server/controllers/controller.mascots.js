const Mascot = require('../models/model.mascots');

async function getAll(req, res) {
  try {
    const mascots = await Mascot.find();
    res.status(200);
    res.send(mascots);
  } catch (error) {
    console('controller getAll error', error);
    res.sendStatus(500);
  }
}

module.exports = { getAll };
