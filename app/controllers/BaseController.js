'use strict';
let Db = require('nedb');
let Filters = require('../Filters');

class BaseController {
  constructor() {
    this.db = new Db({ filename: "./database/posts.nosql", autoload: true, inMemoryOnly: false });
    this.filters = new Filters;
  }
}

module.exports = BaseController;