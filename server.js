const app = require('./app')
const http = require('http')
const { logger } = require('./config/logger')
const {connectMongoose} = require("./config/mongoose");

const port = process.env.PORT || '3030'

const server = http.createServer(app)
connectMongoose().then(() => {
  server.listen(port)
  server.on('listening', onListening)
})


function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  logger.debug('Listening on ' + bind)
}
