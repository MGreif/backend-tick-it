const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,
    weight: { type: Number, default: null },
    dateDue: { type: Date, default: null },
    assignee: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
    labels: [{ type: mongoose.Types.ObjectId, ref: 'Label', default: null }],
    allocatedSubBoard: { type: mongoose.Types.ObjectId, ref: 'SubBoard', default: null },
    relatedTickets: [{ type: mongoose.Types.ObjectId, ref: 'Ticket', default: null }],
    project: { type: mongoose.Types.ObjectId, ref: 'Project', default: null },
    subBoardIndex: {type: Number, default: 0 },
    closed: Boolean
},
{
    timestamps: true
  })

const model = mongoose.model('Ticket', ticketSchema)

module.exports = model