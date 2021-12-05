const mongoose = require('mongoose')
const debug = require('debug')('misc:mongoose')
require('dotenv').config({ path: './.env' })

const mongoUri = process.env.MONGO_URI

const connectMongoose = () => {
  try {
    console.log(mongoUri)
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    debug('could not connect to mongo', error)
  }
}

module.exports = { connectMongoose }