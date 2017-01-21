'use strict';
let BaseController = require('./BaseController');
let Post = require('../models/Post');

class PostController extends BaseController {
  get(req, res, next) {
    let self = this;

    // Carry out the query and call the view render function
    Post.findOne({"_id": req.params.id}).then((post) => {
      if (post) {
        // Cleanup the post
        post = self.cleanPost(post);

        // Render the page
        return res.render('posts/single', {post: post, title: post.title});
      } else {
        // Or 404 if none found
        return next();
      }
    });
  }
}

module.exports = PostController;