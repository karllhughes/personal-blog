'use strict';
let BaseController = require('./BaseController');

class TypeController extends BaseController {
  get(req, res, next) {
    let self = this;
    if (this.filters.isValidType(req.params.type)) {
      this.posts.find({"type": req.params.type})
        .sort({ createdAt: -1 })
        .skip(self.getSkip(req.query.page, req.query.per_page))
        .limit(self.getLimit(req.query.per_page))
        .exec(function (err, docs) {
          // Clean the posts
          docs = docs.map((doc) => self.cleanPost(doc));

          // Render the view
          res.render('posts/index', { posts: docs, title: self.pageTitle(req.params.type)});
      });
    }
  }

  pageTitle(type) {
    return this.filters.ucwords(type)+' Posts';
  }
}

module.exports = TypeController;