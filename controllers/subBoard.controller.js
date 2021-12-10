const debug = require('debug')('api:controller')
const subBoardService = require('../services/subBoard.service')
const boardService = require('../services/board.service')
const { HttpError } = require('../errorHandler')

const getSubBoards = async (req, res, next) => {
  try {
    const result = await subBoardService.getSubBoards()
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const createSubBoardAndAppendToBoard = async (req, res, next) => {
  try {
    const { name, filterCriteriaLabel, wipLimit, boardId } = req.body

    if (!boardId) throw new HttpError(400, "boardId is not given") 

    const createdSubBoard = await subBoardService.createSubBoard({
      name,
      filterCriteriaLabel,
      wipLimit
    })

    const updatedBoard = await boardService.appendSubBoardToBoard(boardId, createdSubBoard._id)

    res.send(updatedBoard)
  } catch (error) {
    next(error)
  }
}

module.exports = { getSubBoards, createSubBoardAndAppendToBoard }