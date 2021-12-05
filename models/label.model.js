const mongoose = require('mongoose')

const labelSchema = new mongoose.Schema({
    name: String,
    description: String,
    color: String,
})

const model = mongoose.model('Label', labelSchema)

module.exports = model