'use strict';
let BaseController = require('./BaseController');

class PostsController extends BaseController {
  get(req, res, next) {
    this.db.find({}, function (err, docs) {
      res.render('posts/index', { posts: docs, title: "All Posts" });
    });
  }
}

module.exports = PostsController;