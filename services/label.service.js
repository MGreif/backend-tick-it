const labelModel = require('../models/label.model')
const subBoardModel = require('../models/subBoard.model')

const getLabels = async (filter = {}) => {
  const result = await labelModel.find(filter).lean()
  return result
}

const createLabel = async (labelData) => {
  const result = await labelModel.create(labelData)
  return result
}

const deleteLabel = async (labelId) => {
  const result = await labelModel.deleteOne({ _id: labelId })
  return result
}
module.exports = { getLabels, createLabel, deleteLabel }