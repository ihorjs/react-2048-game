var Score = require('../models/score');

module.exports = {
    index,
    create,
};

async function index(req, res) {
    const score = await Score.find({}).sort({highScore: -1}).limit(10);
    res.status(200).json(score);
}

async function create(req, res) {
    const score = await Score.create(req.body);
    res.status(201).json(score);
}