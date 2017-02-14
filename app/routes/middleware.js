'use strict';
let bodyParser = require('body-parser');
let moment = require('moment');
let router = require('express').Router();
let connect = require('camo').connect;
let uri = 'nedb://'+__dirname+'/../../database';
let Setting = require('../models/Setting');
let database;

// support url encoded bodies
router.use(bodyParser.urlencoded({ extended: true }));

// Add pagination links to response
router.use(function (req, res, next) {
  let currentPage = req.query.page ? parseInt(req.query.page) : 1;
  let previousPage = currentPage > 1 ? currentPage - 1: null;
  let nextPage = currentPage + 1;

  res.locals.pagination = {};
  res.locals.pagination.nextLink = nextPage ? req.path+"?page="+nextPage : null;
  res.locals.pagination.previousLink = previousPage ? req.path+"?page="+previousPage : null;

  next();
});

// Connect to the DB before future calls
router.use(function (req, res, next) {
  if (!database) {
    connect(uri).then((db) => {
      database = db;
      return next();
    });
  } else {
    return next();
  }
});

// Add global settings to the response
router.use(function (req, res, next) {
  // Some environmental settings
  res.locals.settings = {
    year: moment().format('YYYY'),
    environment: process.env.NODE_ENV || 'development',
  };

  // Process settings from the DB
  Setting.find({}).then((settingObjects) => {
    settingObjects.map(function (settingObject) {
      res.locals.settings[settingObject._id] = settingObject.value;
    });
    return next();
  });
});

router.use(function (req, res, next) {
  // Default description, image, url
  res.locals.description = res.locals.settings.siteDescription;
  res.locals.imageUrl = req.protocol + '://' + req.get('host') + "/images/default.png";
  res.locals.currentUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  return next();
});

/* 301 redirect /:year/:id to /posts/:id */
router.use('/:year(\\d+)/:id', function(req, res, next) {
  return res.redirect(301, '/posts/' + req.params.id);
});

module.exports = router;
