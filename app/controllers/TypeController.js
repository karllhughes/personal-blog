'use strict';
let PostsController = require('./PostsController');

class TypeController extends PostsController {

  getQuery(params) {
    return { type: params.type };
  }

  getTitle(params) {
    return this.filters.ucwords(params.type)+' Posts';
  }
}

module.exports = TypeController;
