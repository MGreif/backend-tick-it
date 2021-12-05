const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    members: [{ type: mongoose.Types.ObjectId, ref: 'User', default: null}],
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null},
    boards: [{ type: mongoose.Types.ObjectId, ref: 'Boards', default: null}]
})

const model = mongoose.model('Project', projectSchema)

module.exports = model