var BaseController = require('./BaseController');
var filters = require('../filters');

var TypeController = Object.create(BaseController);

// Get all posts of this type
TypeController.get = function(req, res, next) {
  if (filters.isValidType(req.params.type)) {
    this.db.find({"type": req.params.type}, function (err, docs) {
      res.render('index', {posts: docs, title: req.params.type});
    });
  }
};

module.exports = TypeController;