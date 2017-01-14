'use strict';
let filters = require('../filters');
let database = require('../database');

class BaseController {
  constructor() {
    this.posts = database.posts;
    this.filters = filters;
  }
}

module.exports = BaseController;