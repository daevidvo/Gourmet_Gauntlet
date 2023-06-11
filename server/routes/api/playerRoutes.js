const router = require('express').Router();
const { putPlayerStats } = require('../../controllers/playerController');

router.route('/').put(putPlayerStats);

module.exports = router;