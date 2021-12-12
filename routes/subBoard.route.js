const express = require('express');
const router = express.Router();
const subBoardController = require('../controllers/subBoard.controller')

router.get('/', subBoardController.getSubBoards)
router.post('/', subBoardController.createSubBoardAndAppendToBoard)
router.delete('/:subBoardId', subBoardController.deleteSubBoard)

module.exports = router;
