const debug = require('debug')('api:errors')

const errorHandler = (error, req, res, next) => {
    debug('error occured', error)
    res.status(500).send('error occured' + error)
}

module.exports = { errorHandler }