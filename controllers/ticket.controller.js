const ticketService = require('../services/ticket.service')
const { HttpError } = require('../errorHandler')

const getTickets = async (req, res, next) => {
  try {
    const result = await ticketService.getTickets()
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const getTicket = async (req, res, next) => {
  try {
    const { ticketId } = req.params

    if (!ticketId) throw new HttpError(400, "ticketId is not given")

    const result = await ticketService.getTicket(ticketId)
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

const updateTicket = async (req, res, next) => {
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
    const { ticketId } = req.params

    const updateData = {
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
    }

    const LEGAL_TICKET_UPDATE_FIELDS = [
      "title",
      "description",
      "weight",
      "dateDue",
      "assignee",
      "createdBy",
      "labels",
      "realtedTickets",
      "project",
      "closed"
    ]

    const legalUpdateData = Object.entries(updateData).reduce((acc, curr) => {
      const [key, value] = curr
      if (value && LEGAL_TICKET_UPDATE_FIELDS.includes(key)) acc[key] = value
      return acc
    }, {})

    if (!ticketId) throw new HttpError(400, "No ticketId passed")

    const result = await ticketService.updateTicket(legalUpdateData, ticketId)

    res.send(result)

  } catch (error) {
    next(error)
  }
}

module.exports = { getTickets, createTicket, updateTicket, getTicket }