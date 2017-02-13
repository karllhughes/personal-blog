'use strict';
let BaseController = require('./BaseController');
let Post = require('../models/Post');
let moment = require('moment');

class PostEditController extends BaseController {

  get(req, res, next) {
    // Show edit or add form
    if (req.params.id) {
      Post.findOne({"_id": req.params.id}).then((post) => {
        if (post) {
          // Fix the created at date
          post.createdAt = moment(post.createdAt).toISOString();
          post.createdAt = post.createdAt.substring(0, post.createdAt.length-1);

          // Convert tags to comma separated string
          post.tags = post.tags.map((tag) => {
            return tag._id;
          }).join(', ');

          return res.render('posts/edit', { post: post, title: "Edit Post" });
        } else {
          return next();
        }
      });
    } else {
      return res.render('posts/add', {title: "Add Post"});
    }
  }

  postAdd(req, res, next) {
    // Create a new post
    Post.create(Post.clean(req.body)).save().then((post) => {
      return res.redirect('/posts/'+post._id);
    }).catch((error) => {
      console.error(error);
      return res.redirect('/posts/add');
    });
  }

  postEdit(req, res, next) {
    let data = req.body;

    // Set updated at to today
    data.updatedAt = new Date();

    // Set created at
    data.createdAt = new Date(data.createdAt);

    // Get post by id and update
    Post.findOneAndUpdate({"_id": req.params.id}, Post.clean(data)).then((post) => {
      return res.redirect('/posts/'+post._id);
    }).catch((error) => {
      console.error(error);
      return res.redirect('/posts/'+req.params.id);
    });
  }
}

module.exports = PostEditController;