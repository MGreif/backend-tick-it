const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('tick-it-service works! (version 0.1.0)')
})

export default router
