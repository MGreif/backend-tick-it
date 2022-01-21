const userService = require('../services/user.service')
const bcrypt = require('bcrypt')
const { HttpError } = require('../errorHandler')

const getUsers = async (req, res, next) => {
  try {
    const result = await userService.getUsers()
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const createUser = async (req, res, next) => {
  try {
    const { username, name, surname, profilePicture, password, roles } = req.body

    if (!password) throw HttpError(400, 'No password was provided')

    const bcryptedPassword = await bcrypt.hash(password, 12)
    const result = await userService.createUser({
      username,
      name,
      surname,
      profilePicture,
      password: bcryptedPassword,
      roles
    })

    res.send(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { getUsers, createUser }