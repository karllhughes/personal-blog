'use strict';
let BaseController = require('./BaseController');

const perPage = 20;

class PostsController extends BaseController {
  get(req, res, next) {
    let self = this;
    this.posts.find({})
      .sort({ createdAt: -1 })
      .skip(self.getSkip(req.query.page, req.query.per_page))
      .limit(self.getLimit(req.query.per_page))
      .exec(function (err, docs) {
      res.render('posts/index', { posts: docs, title: "All Posts" });
    });
  }

  getSkip(page, per_page) {
    page = page ? parseInt(page) : 1;
    per_page = this.getLimit(per_page);
    return (page * per_page) - per_page;
  }

  getLimit(per_page) {
    per_page = per_page ? parseInt(per_page) : perPage;
    return per_page;
  }
}

module.exports = PostsController;