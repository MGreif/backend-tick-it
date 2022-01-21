const app = require('./app')
const http = require('http')
const { logger } = require('./config/logger')

const port = process.env.PORT || '3030'

app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('listening', onListening)

function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  logger.debug('Listening on ' + bind)
}
