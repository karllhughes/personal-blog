'use strict';
let filters = require('../filters');
let database = require('../database');

const startingPage = 1;
const perPage = 20;

class BaseController {
  constructor() {
    this.posts = database.posts;
    this.filters = filters;
  }

  getSkip(page, per_page) {
    page = page ? parseInt(page) : startingPage;
    per_page = this.getLimit(per_page);
    return (page * per_page) - per_page;
  }

  getLimit(per_page) {
    return per_page ? parseInt(per_page) : perPage;
  }
}

module.exports = BaseController;