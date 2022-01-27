const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller')

router.get('/', ticketController.getTickets)
router.get('/:ticketId', ticketController.getTicket)
router.post('/', ticketController.createTicket)
router.patch('/:ticketId', ticketController.updateTicket)
router.patch('/:ticketId/move', ticketController.moveTicket)
module.exports = router;
