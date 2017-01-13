var BaseController = require('./BaseController');

var RssController = Object.create(BaseController);

// Get all posts
RssController.get = function(req, res, next) {

  this.db.find({}, function (err, docs) {
    res.set('Content-Type', 'application/rss+xml');
    res.send(docs);
  });
};

module.exports = RssController;