const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    members: [{ type: mongoose.Types.ObjectId, ref: 'User', default: null}],
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null}
})

const model = mongoose.model('Project', projectSchema)

module.exports = model