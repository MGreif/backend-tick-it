const mongoose = require('mongoose')
const debug = require('debug')('misc:mongoose')

const connectMongoose = async () => {
  try {
    const mongoUri = process.env.MONGO_URI
    debug(mongoUri)
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("connected to mongoose")
  } catch (error) {
    debug('could not connect to mongo', error)
    throw error
  }
}

module.exports = { connectMongoose }