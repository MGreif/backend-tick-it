const express = require('express');
const router = express.Router();
const subBoardController = require('../controllers/subBoard.controller')

router.get('/', subBoardController.getSubBoards)
router.post('/', subBoardController.createSubBoard)

module.exports = router;
