const { Schema, model } = require("mongoose");

const statsSchema = new Schema({
    gameWins: {
        type: Number,
        required: true,
        default: 0,
    },
    gameLosses: {
        type: Number,
        required: true,
        default: 0,
    },
    matchesPlayed: {
        type: Number,
        required: true,
        default: 0,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
  });
  
  const Stats = model("StatsSchema", statsSchema);
  
  module.exports = Stats;