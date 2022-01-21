const debug = require('debug')('api:errors')

class HttpError extends Error {
    constructor (statusCode, message) {
        super()
        this.statusCode = statusCode;
        this.message = message
    }
}

const errorHandler = (error, req, res) => {
    debug('[ERROR]', error)
    res.status(error.statusCode || 500).send(error)
}

module.exports = { errorHandler, HttpError }