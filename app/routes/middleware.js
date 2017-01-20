'use strict';
let bodyParser = require('body-parser');
let database = require('../database');
let moment = require('moment');
let router = require('express').Router();

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

// Add global settings to the response
router.use(function (req, res, next) {
  // Get settings from the DB
  res.locals.settings = {
    year: moment().format('YYYY'),
    environment: process.env.NODE_ENV || 'development',
  };
  database.settings.find({}, function (err, settingObjects) {
    // Process setting objects into one object
    settingObjects.map(function (settingObject) {
      res.locals.settings[settingObject._id] = settingObject.value;
    });
    next();
  });
});

/* 301 redirect /:year/:id to /posts/:id */
router.use('/:year(\\d+)/:id', function(req, res, next) {
  return res.redirect(301, '/posts/' + req.params.id);
});

module.exports = router;
