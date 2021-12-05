const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller')

router.get('/', projectController.getProjects)
router.get('/:userId', projectController.getProjectsByUserId)
router.post('/', projectController.createProject)

module.exports = router;
