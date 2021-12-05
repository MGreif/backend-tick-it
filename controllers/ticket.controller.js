const debug = require('debug')('api:controller')
const ticketService = require('../services/ticket.service')

const getTickets = async (req, res, next) => {
  try {
    const result = await ticketService.getTickets()
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const createTicket = async (req, res, next) => {
  try {
    const { 
      title,
      description,
      weight,
      dateDue,
      assignee,
      createdBy,
      labels,
      realtedTickets,
      project,
      closed
     } = req.body

    const result = await ticketService.createTicket({
      title,
      description,
      weight,
      dateDue,
      assignee,
      createdBy,
      labels,
      realtedTickets,
      project,
      closed
    })

    res.send(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { getTickets, createTicket }