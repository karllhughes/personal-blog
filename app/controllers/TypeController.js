'use strict';
let BaseController = require('./BaseController');

class TypeController extends BaseController {
  get(req, res, next) {
    let self = this;
    if (this.filters.isValidType(req.params.type)) {
      this.db.find({"type": req.params.type}, function (err, docs) {
        let data = {
          posts: docs,
          title: self.pageTitle(req.params.type)
        };

        res.render('posts/index', data);
      });
    }
  }

  pageTitle(type) {
    return this.filters.ucwords(type)+' Posts';
  }
}

module.exports = TypeController;