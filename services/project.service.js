const projectModel = require('../models/project.model')


const getProjects = async (filter = {}) => {
    const result = await projectModel.find(filter)
        .populate('members')
        .populate('createdBy')
        .lean()
    return result
}

const createProject = async (projectData) => {
    const result = await projectModel.create(projectData)
    return result
}

module.exports = { getProjects, createProject }