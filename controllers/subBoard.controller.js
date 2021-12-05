const debug = require('debug')('api:controller')
const subBoardService = require('../services/subBoard.service')

const getSubBoards = async (req, res, next) => {
  try {
    const result = await subBoardService.getSubBoards()
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const createSubBoard = async (req, res, next) => {
  try {
    const { name, filterCriteriaLabel, project, wipLimit } = req.body

    const result = await subBoardService.createSubBoard({
      name,
      filterCriteriaLabel,
      project,
      wipLimit
    })

    res.send(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { getSubBoards, createSubBoard }