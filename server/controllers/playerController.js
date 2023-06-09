const Stats = require('../models/Stats.js');
require('mongoose')

module.exports = {
    async postPlayerStats(req, res) {
        try {
            const stats = await Stats.create(req.body)
            console.log(stats)
            res.status(200).json(stats)
        } catch (err) {
            console.error(err)
        }
    },

    async putPlayerStats(req, res) {
        try {
            const stats = await Stats.findOneAndUpdate({
                userId: req.body.userId
            }, {...req.body}, {
                new: true
            })
            console.log(stats)
            res.status(200).json(stats)
        }
        catch (err) {
            console.error(err)
        }
    }
}