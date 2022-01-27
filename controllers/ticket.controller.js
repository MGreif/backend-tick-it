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

const deleteTicket = async (req, res, next) => {
  try {
    const { ticketId } = req.params

    if (!ticketId) throw new HttpError(400, "ticketId is not given")

    const result = await ticketService.deleteTicket(ticketId)
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
      allocatedSubBoard,
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
      allocatedSubBoard,
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
      relatedTickets,
      allocatedSubBoard,
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
      relatedTickets,
      allocatedSubBoard,
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
      "relatedTickets",
      "allocatedSubBoard",
      "project",
      "closed"
    ]

    const legalUpdateData = Object.entries(updateData).reduce((acc, curr) => {
      const [key, value] = curr
      if (value !== undefined && LEGAL_TICKET_UPDATE_FIELDS.includes(key)) acc[key] = value
      return acc
    }, {})

    if (!ticketId) throw new HttpError(400, "No ticketId passed")
    console.log('updateData', legalUpdateData)
    const result = await ticketService.updateTicket(legalUpdateData, ticketId)

    res.send(result)

  } catch (error) {
    next(error)
  }
}

const moveTicket = async (req, res, next) => {
  try {
    const ticketId = req.params.ticketId
    const { subBoardId, index } = req.body
    if (!ticketId) throw new HttpError(400, "No ticketId passed")
    
    if (subBoardId === 'backlog') {
      const result = await ticketService.updateTicket({ closed: false, allocatedSubBoard: null}, ticketId)
      res.send(result)
      return
    }
    if (subBoardId === 'closed') {
      const result = await ticketService.updateTicket({ closed: true }, ticketId)
      res.send(result)
      return
    }

    const result = await ticketService.moveTicket(ticketId, subBoardId, index)
    
    res.send(result)

  } catch (error) {
    next(error)
  }
}

module.exports = { getTickets, createTicket, updateTicket, getTicket, moveTicket, deleteTicket }