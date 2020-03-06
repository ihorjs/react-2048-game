const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const highScoreSchema = new Schema({
   highScore: [ {name: {type: String, max: 20},
    score: Number}]
},{
    timestamp: true,
});

module.exports = mongoose.model('HighScore', highScoreSchema);