const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
    userStage: {
        type: Number,
        required: true,
        default: 1,
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    userHealth: {
        type: Number,
        required: true,
        default: 5,
    },
    userCards: {
        type: Schema.Types.ObjectId, ref: 'GameCards',
        required: true,
    }
  });
  
  const Game = model("GameSchema", gameSchema);
  
  module.exports = Game;