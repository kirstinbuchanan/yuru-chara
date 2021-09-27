const router = require('express').Router();
const mascotController = require('./controllers/controller.mascots');

router.get('/mascots', mascotController.getAll);

router.post('/mascots', mascotController.addMascot);

router.put('/mascots/:id', mascotController.toggleFavourite);

router.get('/mascots/:id', mascotController.getMascot);

module.exports = router;
