const express = require('express');
const router = express.Router();
const highScoresCtrl = require('../../controllers/highScores');

router.get('/', highScoresCtrl.index);
router.post('/', highScoresCtrl.create);

module.exports = router;