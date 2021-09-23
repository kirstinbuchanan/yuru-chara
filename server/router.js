const router = require('express').Router();
const controller = require('./controllers/controller.mascots');

router.get('/mascots', controller.getAll);

module.exports = router;
