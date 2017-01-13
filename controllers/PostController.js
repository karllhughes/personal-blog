var BaseController = require('./BaseController');

var PostController = Object.create(BaseController);

PostController.get = function(req, res, next) {
  // Get all posts
  this.db.findOne({"_id": req.param('id')}, function (err, doc) {
    return res.render('posts/single', { post: doc });
  });
};

module.exports = PostController;