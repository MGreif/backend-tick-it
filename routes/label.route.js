const express = require('express');
const router = express.Router();
const labelController = require('../controllers/label.controller')

router.get('/', labelController.getLabels)
router.post('/', labelController.createLabel)
router.delete('/:labelId', labelController.deleteLabel)

module.exports = router;
