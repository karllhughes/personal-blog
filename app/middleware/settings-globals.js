'use strict';
let router = require('express').Router();
let database = require('../database');

// Add global settings to the response
router.use(function (req, res, next) {
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

module.exports = router;
