let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let exphbs  = require('express-handlebars');
let web = require('./app/routes/web');
let middleware = require('./app/routes/middleware');
require('dotenv').config();

let app = express();

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// Load the middleware and routes
app.use(middleware);
app.use('/', web);

// 404 response
app.use(function (req, res, next) {
  res.status(404).render('posts/404');
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err.message);
});

module.exports = app;
