const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller')

router.get('/', ticketController.getTickets)
router.post('/', ticketController.createTicket)

module.exports = router;
