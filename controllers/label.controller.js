const debug = require('debug')('api:controller')
const labelService = require('../services/label.service')

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

module.exports = { getLabels, createLabel }