const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const userRouter = require('./routes/user.route')
const projectRouter = require('./routes/project.route')
const labelRouter = require('./routes/label.route')
const boardRouter = require('./routes/board.route')
const subBoardRouter = require('./routes/subBoard.route')
const ticketRouter = require('./routes/ticket.route')
const indexRouter = require('./routes/index.route')
const keycloak = require('./auth/keycloak.js').initKeycloak();
const { errorHandler } = require('./errorHandler')
const cors = require('cors')
const { loggerMiddleware } = require('./config/logger')
const app = express()


app.use(loggerMiddleware)
app.use(cors({ origin: '*' }))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(keycloak.middleware());
//app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/tickets', ticketRouter)
app.use('/subBoards', subBoardRouter)
app.use('/boards', boardRouter)
app.use('/labels', labelRouter)
app.use('/projects', projectRouter)

app.use(errorHandler)

module.exports = app
