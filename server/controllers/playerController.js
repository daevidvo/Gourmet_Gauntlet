const Stats = require("../models/Stats.js");
require("mongoose");
const jwt_decode = require("jwt-decode");

module.exports = {
  async putPlayerStats(req, res) {
    try {
      const decoded = jwt_decode(req.body.token);
      console.log("token ", req.body.token);
      console.log("condition ", req.body.condition);
      console.log("decoded token, ", decoded);

      let { gameWins, gameLosses, matchesPlayed } = await Stats.findOne({
        userId: decoded.data._id,
      });

      switch (req.body.condition) {
        case "loss":
          await Stats.findOneAndUpdate(
            { userId: decoded.data._id },
            {
              matchesPlayed: (matchesPlayed += 1),
              gameLosses: (gameLosses += 1),
            }
          );
          break;
        case "win":
          await Stats.findOneAndUpdate(
            { userId: decoded.data._id },
            {
              matchesPlayed: (matchesPlayed += 1),
              gameWins: (gameWins += 1),
            }
          );
          break;
      }
    } catch (err) {
      console.error(err);
    }
  },
};
