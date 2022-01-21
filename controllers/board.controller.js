const { HttpError } = require('../errorHandler')
const boardService = require('../services/board.service')

const getBoards = async (req, res, next) => {
  try {
    const result = await boardService.getBoards()
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const getBoardsByProjectId = async (req, res, next) => {
  try {
    const projectId = req.params.projectId
    if(!projectId) throw new HttpError(400, "No projectId given")
    const result = await boardService.getBoards({ project: projectId })
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const createBoard = async (req, res, next) => {
  try {
    const { name, subBoards, project } = req.body

    const result = await boardService.createBoard({
      name,
      project,
      subBoards
    })

    res.send(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { getBoards, createBoard, getBoardsByProjectId }