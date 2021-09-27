const router = require('express').Router();
const mascotController = require('./controllers/controller.mascots');
const favouriteController = require('./controllers/controller.favourites');

router.get('/mascots', mascotController.getAll);

router.get('/favourites', favouriteController.getFavourites);

router.post('/favourites', favouriteController.addFavourite);

router.delete('/favourites/:id', favouriteController.removeFavourite);

module.exports = router;
