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

const getUser = async (req, res, next) => {
  try {
    const keycloakId = req.params.keycloakId
    const result = await userService.getUser({ keycloakId })
    res.send(result)
  } catch (error) {
    next(error)
  }
}

const createUser = async (req, res, next) => {
  try {
    const { keycloakId } = req.body

    const result = await userService.createUser({
      keycloakId
    })

    res.send(result)
  } catch (error) {
    next(error)
  }
}

const getOrCreateUser = async (req, res, next) => {
  try {
    const { keycloakId } = req.params

    let result = await userService.getUser({ keycloakId: keycloakId })

    if (!result) {
        result = await userService.createUser({
        keycloakId
      })
    }


    res.send(result)
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params

    const result = await userService.deleteUser({_id: id})

    res.send(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { getUsers, createUser, getUser, deleteUser, getOrCreateUser }