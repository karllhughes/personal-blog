'use strict';
let BaseController = require('./BaseController');

class PostController extends BaseController {
  get(req, res, next) {
    let self = this;
    this.posts.findOne({"_id": req.params.id}, function (err, doc) {

      // Cleanup the post
      doc = self.cleanPost(doc);

      // Render the page
      res.render('posts/single', {post: doc, title: doc.title});
    });
  }
}

module.exports = PostController;