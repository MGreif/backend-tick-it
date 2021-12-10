const { ObjectId } = require('bson')
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

const appendSubBoardToBoard = async (boardId, subBoardId) => {
    const result = await boardModel
        .updateOne({_id: boardId}, { $push: { subBoards: ObjectId(subBoardId) } })
    return result
}

module.exports = { getBoards, createBoard, appendSubBoardToBoard }