const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    keycloakId: String,
})

const model = mongoose.model('User', userSchema)

module.exports = model