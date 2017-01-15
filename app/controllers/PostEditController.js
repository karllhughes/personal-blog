'use strict';
let BaseController = require('./BaseController');

class PostEditController extends BaseController {
  get(req, res, next) {
    let filters = this.filters;
    this.posts.findOne({"_id": req.params.id}, function (err, doc) {

      // Render the page
      res.render('posts/edit', {post: doc, title: doc.title});
    });
  }
}

module.exports = PostEditController;