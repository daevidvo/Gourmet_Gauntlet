const { Schema, model } = require("mongoose");

const gameCardsSchema = new Schema({
  cardName: {
    type: String,
    required: true,
    unique: true,
  },
  cardHealth: {
    type: Number,
    required: true,
  },
  cardAttack: {
    type: Number,
    required: true,
  },
  cardImage: {
    type: String,
    required: true,
  },
  cardType: {
    type: String,
    required: true,
  },
});

const GameCards = model("GameCards", gameCardsSchema);

module.exports = GameCards;
