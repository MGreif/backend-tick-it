const ticketModel = require('../models/ticket.model')


const getTickets = async (filter = {}) => {
  const result = await ticketModel.find(filter)
    .populate('assignee')
    .populate('createdBy')
    .populate('labels')
    .populate('relatedTickets', 'title')
    .populate('project')
    .lean()
  return result
}

const createTicket = async (ticketData) => {
  const result = await ticketModel.create(ticketData)
  return result
}

module.exports = { getTickets, createTicket }