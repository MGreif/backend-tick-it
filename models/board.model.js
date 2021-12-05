const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
    name: String,
    project: { type: mongoose.Types.ObjectId, ref: 'Project', default: null},
    subBoards: [{ type: mongoose.Types.ObjectId, ref: 'SubBoard', default: null}]

})

const model = mongoose.model('Board', boardSchema)

module.exports = model