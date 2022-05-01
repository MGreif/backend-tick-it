const projectService = require('../services/project.service')
const boardService = require('../services/board.service')
const ticketService = require('../services/ticket.service')
const labelService = require('../services/label.service')
const { HttpError } = require('../errorHandler')
const { logger } = require('../config/logger')

const getProjects = async (req, res, next) => {
  try {
    const result = await projectService.getProjects()
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const getProjectsByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId
    const projects = await projectService.getProjects({ members: userId })
    res.send(projects)
  } catch (error) {
    next(error)
  }
}

const getProjectById = async (req, res, next) => {
  try {
    const { projectId } = req.params
    if (!projectId) throw new HttpError(400, 'No ProjectId given')
    const project = await projectService.getProjectById(projectId)
    const { members } = project
    const boards = await boardService.getBoards({ project: projectId })
    const tickets = await ticketService.getTickets({ project: projectId })
    const labels = await labelService.getLabels({ project: projectId })
    res.send({ ...project, boards, tickets, labels, members })
  } catch (error) {
    next(error)
  }
}

const createProject = async (req, res, next) => {
  try {
    logger.debug('CALLED')
    const { name, description, members, createdBy } = req.body
    const result = await projectService.createProject({
      name,
      description,
      members,
      createdBy,
    })

    res.send(result)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getProjects,
  createProject,
  getProjectsByUserId,
  getProjectById,
}
