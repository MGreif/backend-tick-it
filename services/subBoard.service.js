const subBoardModel = require('../models/subBoard.model')


const getSubBoards = async (filter = {}) => {
  const result = await subBoardModel.find(filter)
    .populate('filterCriteriaLabel')
    .populate('project')
    .lean()
  return result
}

const createSubBoard = async (subBoardData) => {
  const result = await subBoardModel.create(subBoardData)
  return result
}

const deleteSubBoard = async (subBoardId) => {
  const result = await subBoardModel.findOneAndDelete({ _id: subBoardId })
  return result
}

module.exports = { getSubBoards, createSubBoard, deleteSubBoard }