const router = require('express').Router();
const { postPlayerStats, putPlayerStats } = require('../../controllers/playerController');

router.route('/').post(postPlayerStats).put(putPlayerStats);

module.exports = router;