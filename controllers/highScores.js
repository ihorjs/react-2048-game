var HighScore = require('../models/highScore');

module.exports = {
    index,
    create,
};

async function index(req, res) {
    const highScore = await HighScore.find({});
    res.status(200).json(highScore);
}

async function create(req, res) {
    const highScore = await HighScore.create(req.body);
    res.status(201).json(highScore);
}