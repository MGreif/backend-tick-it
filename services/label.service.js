const labelModel = require('../models/label.model')


const getLabels = async (filter = {}) => {
    const result = await labelModel.find(filter)
        .populate('members')
        .populate('createdBy')
        .populate('boards')
        .lean()
    return result
}

const createLabel = async (labelData) => {
    const result = await labelModel.create(labelData)
    return result
}

module.exports = { getLabels, createLabel }