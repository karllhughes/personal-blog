'use strict';
let PostsController = require('./PostsController');

class TagController extends PostsController {

  getQuery(params) {
    return { "tags._id": params.tag };
  }

  getTitle(params) {
    return '"'+params.tag+'" Posts';
  }
}

module.exports = TagController;
