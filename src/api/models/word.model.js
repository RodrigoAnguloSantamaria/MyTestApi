const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wordSchema = new Schema({
  length: { type: Number },
  word: { type: Array },
});

const Word = mongoose.model("word", wordSchema);

module.exports = Word;
