const userModel = require('../models/user.model')


const getUsers = async (filter = {}) => {
    const result = await userModel.find(filter).lean()
    return result
}

const getUser = async (filter = {}) => {
    const result = await userModel.findOne(filter).lean()
    return result
}
const createUser = async (userData) => {
    const result = await userModel.create(userData)
    return result
}

const deleteUser = async (filter = {}) => {
    const result = await userModel.deleteMany(filter)
    return result
}
module.exports = { getUsers, createUser, getUser, deleteUser }