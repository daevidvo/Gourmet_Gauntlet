const router = require('express').Router();
const cardRoutes = require('./cardRoutes');
const playerRoutes = require('./playerRoutes');

router.use('/cards', cardRoutes);
router.use('/players', playerRoutes);

module.exports = router;