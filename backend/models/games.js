const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  players: {
    type: Number,
    required: true
  },
  boxArt: {
    type: String || null,
    required: true
  },
  platforms: {
    type: Object,
    required: true
  },
});

module.exports = mongoose.model('Game', gameSchema)
