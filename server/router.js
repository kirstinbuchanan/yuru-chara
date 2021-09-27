const router = require('express').Router();
const mascotController = require('./controllers/controller.mascots');

router.get('/mascots', mascotController.getAll);

module.exports = router;
