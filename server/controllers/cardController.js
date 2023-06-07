const Cards = require('../models/Cards.js');
require('mongoose')

module.exports = {
    getCards(req, res) {
        Cards.find({})
        .then((cards) => res.status(200).json(cards))
        .catch((err) => res.status(500).json(err))
    },
}