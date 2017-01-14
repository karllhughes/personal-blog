'use strict';
let BaseController = require('./BaseController');

class TagController extends BaseController {
  get(req, res, next) {
    this.posts.find({"tags._id": req.params.tag})
      .sort({ createdAt: -1 })
      .skip(self.getSkip(req.query.page, req.query.per_page))
      .limit(self.getLimit(req.query.per_page))
      .exec(function (err, docs) {
      let data = {
        posts: docs,
        title: '"'+req.params.tag+'" Posts'
      };
      res.render('posts/index', data);
    });
  }
}

module.exports = TagController;