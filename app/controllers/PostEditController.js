'use strict';
let BaseController = require('./BaseController');

class PostEditController extends BaseController {
  get(req, res, next) {
    let self = this;
    this.posts.findOne({"_id": req.params.id}, function (err, doc) {
      // Render the page
      res.render('posts/edit', {post: doc, title: self.getTitle(doc.title)});
    });
  }

  getTitle(postTitle) {
    return "Editing \""+postTitle+"\"";
  }
}

module.exports = PostEditController;