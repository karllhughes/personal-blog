let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let exphbs  = require('express-handlebars');
let web = require('./app/routes/web');
let database = require('./app/database');
let moment = require('moment');
require('dotenv').config();

let app = express();

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// Add global settings to the response
app.use(function (req, res, next) {
  // Get settings from the DB
  res.locals.settings = {
    year: moment().format('YYYY')
  };
  database.settings.find({}, function (err, settingObjects) {
    // Process setting objects into one object
    settingObjects.map(function (settingObject) {
      res.locals.settings[settingObject._id] = settingObject.value;
    });
    next();
  });
});

// Add pagination links to response
app.use(function (req, res, next) {
  let currentPage = req.query.page ? parseInt(req.query.page) : 1;
  let previousPage = currentPage > 1 ? currentPage - 1: null;
  let nextPage = currentPage + 1;

  res.locals.pagination = {};
  res.locals.pagination.nextLink = nextPage ? req.path+"?page="+nextPage : null;
  res.locals.pagination.previousLink = previousPage ? req.path+"?page="+previousPage : null;

  next();
});

// Load the routes
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
