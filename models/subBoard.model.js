const mongoose = require('mongoose')

const subBoardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    filterCriteriaLabel: { type: mongoose.Types.ObjectId, ref: 'Label', default: null},
    wipLimit: { type: Number, default: null }
})

const model = mongoose.model('SubBoard', subBoardSchema)

module.exports = model