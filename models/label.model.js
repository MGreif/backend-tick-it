const mongoose = require('mongoose')

const labelSchema = new mongoose.Schema({
    name: String,
    description: String,
    color: String,
    project: { type: mongoose.Types.ObjectId, ref: 'Project', default: null}
})

const model = mongoose.model('Label', labelSchema)

module.exports = model