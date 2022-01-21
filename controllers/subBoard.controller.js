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

    await boardService.appendSubBoardToBoard(boardId, createdSubBoard._id)

    res.send(createdSubBoard)
  } catch (error) {
    next(error)
  }
}

const deleteSubBoard = async (req, res, next) => {
  try {
    const { subBoardId } = req.params
    if (!subBoardId) throw new HttpError(400, "subBoardId is not given") 

    const deletedObject = await subBoardService.deleteSubBoard(subBoardId)

    if (!deletedObject) throw new HttpError(400, `SubBoard with id: ${subBoardId} could not be deleted`) 

    await boardService.removeSubBoardFromBoard(subBoardId)

    res.send(deletedObject)

  } catch(error) {
    next(error)
  }
}

module.exports = { getSubBoards, createSubBoardAndAppendToBoard, deleteSubBoard }