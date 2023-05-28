const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    username: String,
    keycloakId: String,
    password: String,
    profilePicture: String,
    roles: [String]
})

const model = mongoose.model('User', userSchema)

module.exports = model