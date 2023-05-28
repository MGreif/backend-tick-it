const { logger } = require('./config/logger')

class HttpError extends Error {
    constructor (statusCode, message) {
        super()
        this.statusCode = statusCode;
        this.message = message
    }
}

const errorHandler = (err, req, res, next) => {
    logger.error('[ERROR]', err)
    res.status(500).send(err)
}

module.exports = { errorHandler, HttpError }