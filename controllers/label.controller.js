const { HttpError } = require('../errorHandler')
const labelService = require('../services/label.service')
const ticketService = require('../services/ticket.service')
const subBoardService = require('../services/subBoard.service')

const getLabels = async (req, res, next) => {
  try {
    const result = await labelService.getLabels()
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const createLabel = async (req, res, next) => {
  try {
    const { name, description, color, project } = req.body

    const result = await labelService.createLabel({
      name,
      description,
      color,
      project
    })

    res.send(result)
  } catch (error) {
    next(error)
  }
}

const deleteLabel = async (req, res, next) => {
  try {

    const { labelId } = req.params

    if (!labelId) throw new HttpError(400, "No labelId passed")

    const labelIsUsedByBoards = await subBoardService.checkIfSubBoardsHaveSpecificLabelAsFilterCriteria(labelId)

    if (labelIsUsedByBoards) throw new HttpError(400, "The Label is still used as a filterCriteria Label by some boards. Delete it and try again")

    const deletedObject = labelService.deleteLabel(labelId)

    if (!deletedObject) throw new HttpError(400, `Label with id: ${labelId} could not be deleted`) 

    await ticketService.removeLabelFromAllTickets(labelId)

    res.send(deletedObject)
  } catch (error) {
    next(error)
  }
}

module.exports = { getLabels, createLabel, deleteLabel }