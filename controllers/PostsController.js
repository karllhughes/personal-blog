var BaseController = require('./BaseController');

var PostsController = Object.create(BaseController);

PostsController.get = function(req, res, next) {
  // Get all posts
  this.db.find({}, function (err, docs) {
    return res.render('index', { posts: docs });
  });
};

module.exports = PostsController;