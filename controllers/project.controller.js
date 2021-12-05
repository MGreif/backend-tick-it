const debug = require('debug')('api:controller')
const projectService = require('../services/project.service')

const getProjects = async (req, res, next) => {
  try {
    const result = await projectService.getProjects()
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const createProject = async (req, res, next) => {
  try {
    const { name, description, members, createdBy, boards } = req.body

    const result = await projectService.createProject({
      name,
      description,
      members,
      createdBy,
      boards
    })

    res.send(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { getProjects, createProject }