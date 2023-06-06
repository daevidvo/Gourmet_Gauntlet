const router = require('express').Router();
const { getCards } = require('../../controllers/cardController');

router.route('/').get(getCards);

module.exports = router;