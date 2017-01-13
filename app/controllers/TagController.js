var BaseController = require('./BaseController');

var TagController = Object.create(BaseController);

// Get all posts of this type
TagController.get = function(req, res, next) {
  this.db.find({"tags._id": req.params.tag}, function (err, docs) {
    res.render('index', {posts: docs, title: req.params.tag});
  });
};

module.exports = TagController;