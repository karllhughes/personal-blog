var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var exphbs  = require('express-handlebars');
var web = require('./app/routes/web');
require('dotenv').config();

var app = express();

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', web);

// 404 response
app.use(function (req, res, next) {
  res.status(404).send("404 Not Found");
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err.message);
});

module.exports = app;
