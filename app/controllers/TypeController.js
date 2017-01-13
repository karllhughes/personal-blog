var BaseController = require('./BaseController');
var filters = require('../filters');

var TypeController = Object.create(BaseController);

// Get all posts of this type
TypeController.get = function(req, res, next) {
  if (filters.isValidType(req.params.type)) {
    this.db.find({"type": req.params.type}, function (err, docs) {
      var data = {
        posts: docs,
        title: TypeController.pageTitle(req.params.type)
      };

      res.render('posts/index', data);
    });
  }
};

TypeController.pageTitle = function(type) {
  return filters.ucwords(type)+' Posts';
};

module.exports = TypeController;