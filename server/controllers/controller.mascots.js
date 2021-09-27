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

async function createTopic(req, res) {
  try {
    const topic = await model.create({
      title: req.body.title,
      published_at: new Date(),
      score: 0,
    });
    res.status(201);
    res.send(topic);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function addMascot(req, res) {
  try {
    const mascot = req.body;
    const add = await Mascot.create(mascot);
    res.status(201);
    res.send(add);
  } catch (error) {
    console.log('controller addMascot error', error);
    res.sendStatus(500);
  }
}

module.exports = { getAll, addMascot };
