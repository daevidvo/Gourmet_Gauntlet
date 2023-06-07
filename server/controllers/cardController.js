const Cards = require('../models/Cards.js');
require('mongoose')

module.exports = {
    async getCards(req, res) {
        try {
           const cards = await Cards.find({})

           console.log(cards)

           res.status(200).json(cards)
        } catch (err) {
            console.error(err)
        }
    },
}