const debug = require('debug')('api:controller')
const boardService = require('../services/board.service')

const getBoards = async (req, res, next) => {
  try {
    const result = await boardService.getBoards()
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const createBoard = async (req, res, next) => {
  try {
    const { name, subBoards } = req.body

    const result = await boardService.createBoard({
      name,
      subBoards
    })

    res.send(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { getBoards, createBoard }