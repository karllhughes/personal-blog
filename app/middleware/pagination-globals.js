'use strict';
let router = require('express').Router();

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

module.exports = router;
