const app = require('./app')
const debug = require('debug')('server:server.js')
const http = require('http')

const port = process.env.PORT || '3030'

app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('listening', onListening)

function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  debug('Listening on ' + bind)
}
