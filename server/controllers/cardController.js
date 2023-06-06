const Cards = require('../models/Cards.js');

module.exports = {
    getCards(req, res) {
        Cards.find()
        .then((cards) => res.json(cards))
        .catch((err) => res.status(500).json(err))
    },
}