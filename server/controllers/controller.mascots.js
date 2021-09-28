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

async function getMascot(req, res) {
  try {
    const id = req.params.id;
    const mascot = await Mascot.findById(id);
    res.status(200);
    res.send(mascot);
  } catch (error) {
    console('controller getOneMascot error', error);
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

async function toggleFavourite(req, res) {
  try {
    const id = req.params.id;

    console.log('controller id', id);
    const faveStatus = req.body.favourite;
    console.log('faveStatus', faveStatus);
    const fave = await Mascot.findByIdAndUpdate(id, { favourite: faveStatus }, { new: true });
    console.log('fave server controller', fave);
    res.status(200);
    res.send(fave);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = { getAll, addMascot, toggleFavourite, getMascot };
