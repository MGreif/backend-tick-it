const express = require('express');
const router = express.Router();
const labelController = require('../controllers/label.controller')

router.get('/', labelController.getLabels)
router.post('/', labelController.createLabel)

module.exports = router;
