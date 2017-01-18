'use strict';
let router = require('express').Router();

/* 301 redirect /:year/:id to /posts/:id */
router.use('/:year(\\d+)/:id', function(req, res, next) {
  return res.redirect(301, '/posts/' + req.params.id);
});

module.exports = router;
