const labelModel = require('../models/label.model')


const getLabels = async (filter = {}) => {
    const result = await labelModel.find(filter).lean()
    return result
}

const createLabel = async (labelData) => {
    const result = await labelModel.create(labelData)
    return result
}

module.exports = { getLabels, createLabel }