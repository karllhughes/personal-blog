var BaseController = require('./BaseController');

var PostController = Object.create(BaseController);

// Get single post
PostController.get = function(req, res, next) {

  this.db.findOne({"_id": req.params.id}, function (err, doc) {
    // Parse markdown
    doc.content = BaseController.parseMarkdown(doc.content);

    // Render the page
    res.render('posts/single', { post: doc, title: doc.title });
  });
};

module.exports = PostController;