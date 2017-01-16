'use strict';
let BaseController = require('./BaseController');

class TagController extends BaseController {
  get(req, res, next) {
    let self = this;
    this.posts.find({"tags._id": req.params.tag})
      .sort({ createdAt: -1 })
      .skip(self.getSkip(req.query.page, req.query.per_page))
      .limit(self.getLimit(req.query.per_page))
      .exec(function (err, docs) {
        // Clean the posts
        docs = docs.map((doc) => self.cleanPost(doc));

        // Render the view
        res.render('posts/index', { posts: docs, title: '"'+req.params.tag+'" Posts' });
    });
  }
}

module.exports = TagController;