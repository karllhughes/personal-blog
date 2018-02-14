'use strict';
const BaseController = require('./BaseController');
const fs = require('fs');

class PostEditController extends BaseController {
  get(req, res, next) {
    const fileContents = fs.readFileSync('./.data/posts.db');

    // Return a response
    res.set("Content-Type", "text; charset=utf-8");
    res.send(fileContents);
  }
}

module.exports = PostEditController;