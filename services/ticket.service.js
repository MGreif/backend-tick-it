const ticketModel = require('../models/ticket.model')


const getTickets = async (filter = {}) => {
  const result = await ticketModel.find(filter)
    .populate('assignee')
    .populate('createdBy')
    .populate('allocatedSubBoard')
    .populate('labels')
    .populate('relatedTickets', 'title')
    .populate('project')
    .lean()
  return result
}

const getTicket = async (ticketId) => {
  const result = await ticketModel.findById(ticketId)
    .populate('assignee')
    .populate('createdBy')
    .populate('labels')
    .populate('allocatedSubBoard')
    .populate('relatedTickets', 'title')
    .populate('project')
    .lean()
  return result
}

const createTicket = async (ticketData) => {
  const result = await ticketModel.create(ticketData)
  return result
}

const removeLabelFromAllTickets = async (labelId) => {
  const result = await ticketModel
    .updateOne({ labels: labelId }, { $pull: { labels: labelId } })
  return result
}

const updateTicket = async (updateData, ticketId) => {
  const result = await ticketModel
    .updateOne({ _id: ticketId }, {$set: { ...updateData }})
  return result
}

const deleteTicket = async (ticketId) => {
  const result = await ticketModel
    .deleteOne({ _id: ticketId })
  return result
}

const moveTicket = async (ticketId, subBoardId, index) => {
  const result = await ticketModel
    .updateOne({ _id: ticketId }, {$set: { allocatedSubBoard: subBoardId, index }})
  return result
}

module.exports = { moveTicket, getTickets, createTicket, removeLabelFromAllTickets, updateTicket, getTicket, deleteTicket }