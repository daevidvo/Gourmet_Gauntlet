const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
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
    required: true
  }
});

const Cards = model("Cards", cardSchema);

module.exports = Cards;
