const debug = require('debug')('api:controller')
const projectService = require('../services/project.service')
const boardService = require('../services/board.service')
const ticketService = require('../services/ticket.service')
const labelService = require('../services/label.service')

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
    const projectIds = projects.map(project => project._id)
    const boards = await boardService.getBoards({ project: { $in: projectIds } })
    const tickets = await ticketService.getTickets({ project: { $in: projectIds } })
    const labels = await labelService.getLabels({ project: { $in: projectIds } })
    res.send({ projects, boards, tickets, labels})
  } catch (error) {
    next(error)
  }
}

const createProject = async (req, res, next) => {
  try {
    const { name, description, members, createdBy } = req.body

    const result = await projectService.createProject({
      name,
      description,
      members,
      createdBy
    })

    res.send(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { getProjects, createProject, getProjectsByUserId }