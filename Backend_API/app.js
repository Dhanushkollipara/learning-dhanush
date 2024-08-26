console.log("nodemon started again")
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products')
var AuthorRouter = require('./routes/authors')
var todoRoutes = require('./routes/todoRoutes');
const carrental = require('./routes/carrental');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter);
app.use('/authors', AuthorRouter);
app.use('/api/todos',todoRoutes);
app.use('/carrental',carrental);

// catch 404 and forward to error handler
let mongoConnUrl = "mongodb://localhost/ascendion";
mongoose.connect(mongoConnUrl)
let db = mongoose.connection;
db.on("error",function(){
  console.log("error came in connecting")
})
db.on("connected",function(){
  console.log("you are running mongodb in ascendion")
})
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
