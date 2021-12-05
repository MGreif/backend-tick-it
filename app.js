const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const userRouter = require('./routes/user.route');
const projectRouter = require('./routes/project.route');
const labelRouter = require('./routes/label.route');
const boardRouter = require('./routes/board.route');
const subBoardRouter = require('./routes/subBoard.route');
const ticketRouter = require('./routes/ticket.route');
const { errorHandler } = require('./errorHandler');
const { connectMongoose } = require('./mongoose');
const debug = require('debug')('server:api.js')


const app = express();

connectMongoose()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRouter)
app.use('/tickets', ticketRouter)
app.use('/subBoards', subBoardRouter)
app.use('/boards', boardRouter)
app.use('/labels', labelRouter)
app.use('/projects', projectRouter)

app.use(errorHandler)


module.exports = app;
