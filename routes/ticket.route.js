const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller')

router.get('/', ticketController.getTickets)
router.post('/', ticketController.createTicket)
router.patch('/:ticketId', ticketController.updateTicket)

module.exports = router;
