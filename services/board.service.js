const boardModel = require('../models/board.model')


const getBoards = async (filter = {}) => {
    const result = await boardModel.find(filter)
        .populate('subBoards')
        .lean()
    return result
}

const createBoard = async (boardData) => {
    const result = await boardModel.create(boardData)
    return result
}

module.exports = { getBoards, createBoard }