var BaseController = require('./BaseController');

var PostController = Object.create(BaseController);

PostController.get = function(req, res, next) {
  // Get all posts
  this.db.findOne({"_id": req.param('id')}, function (err, doc) {
    // Parse markdown
    doc.content = BaseController.parseMarkdown(doc.content);

    // Render the page
    return res.render('posts/single', { post: doc, title: doc.title });
  });
};

module.exports = PostController;