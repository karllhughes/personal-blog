var BaseController = require('./BaseController');

var PostsController = Object.create(BaseController);

// Get all posts
PostsController.get = function(req, res, next) {

  this.db.find({}, function (err, docs) {
    res.render('posts/index', { posts: docs, title: "All Posts" });
  });
};

module.exports = PostsController;