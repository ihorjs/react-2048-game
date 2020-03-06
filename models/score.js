const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema(
  {
    name: { type: String, max: 20 },
    highScore: Number
  },
  { autoIndex: false },
  {
    timestamp: true
  }
);


module.exports = mongoose.model("Score", scoreSchema);
