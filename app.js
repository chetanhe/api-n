require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var winstonLogger = require('./winston.js');


var fileRouter = require('./routes/fileroutes');
var workerThreadRouter = require('./routes/workerThreadRoutes');
var queueRouter = require('./routes/queueRouter');
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/file', fileRouter);
app.use('/worker-thread', workerThreadRouter);
app.use('/queue', queueRouter);
//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log('error handler');
  winstonLogger.log({level:'info', message:err.message});  
  res.status(err.status || 500);
  res.send({error:err.message});
});

module.exports = app;
