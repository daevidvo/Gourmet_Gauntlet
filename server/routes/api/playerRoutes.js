const router = require('express').Router();
const { postPlayerStats, putPlayerStats } = require('../../controllers/playerController');

router.route('/').put(putPlayerStats);

module.exports = router;