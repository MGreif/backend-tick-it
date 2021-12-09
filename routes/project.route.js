const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller')

router.get('/:projectId', projectController.getProjectById)
router.get('/by-user/:userId', projectController.getProjectsByUserId)
router.post('/', projectController.createProject)

module.exports = router;
