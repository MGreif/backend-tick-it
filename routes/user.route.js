const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.get('/:keycloakId', userController.getUser)

module.exports = router;
