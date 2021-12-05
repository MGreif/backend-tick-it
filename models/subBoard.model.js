const mongoose = require('mongoose')

const subBoardSchema = new mongoose.Schema({
    name: String,
    filterCriteriaLabel: { type: mongoose.Types.ObjectId, ref: 'Label', default: null},
    wipLimit: Number
})

const model = mongoose.model('SubBoard', subBoardSchema)

module.exports = model