const mongoose = require('mongoose')
const debug = require('debug')('misc:mongoose')

const connectMongoose = () => {
  try {
    const mongoUri = process.env.MONGO_URI
    debug(mongoUri)
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    debug('could not connect to mongo', error)
  }
}

module.exports = { connectMongoose }