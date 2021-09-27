const Favourite = require('../models/model.favourites');

async function getFavourites(req, res) {
  try {
    const favourites = await Favourite.find();
    res.status(200);
    res.send(favourites);
  } catch (error) {
    console('controller getFavourites error', error);
    res.sendStatus(500);
  }
}

async function addFavourite(req, res) {
  try {
    const favourite = req.body;
    const newFavourite = await Favourite.create(favourite);
    res.status(201);
    res.send(newFavourite);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function removeFavourite(req, res) {
  try {
    const id = req.params.id;
    const favourite = await Favourite.findByIdAndDelete(id);
    res.status(200);
    res.send(favourite);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = { getFavourites, addFavourite, removeFavourite };
