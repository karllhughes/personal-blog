'use strict';
let BaseController = require('./BaseController');

class TypeController extends BaseController {
  get(req, res, next) {
    let self = this;
    if (this.filters.isValidType(req.params.type)) {
      this.posts.find({"type": req.params.type})
        .sort({ createdAt: -1 })
        .skip(0)
        .limit(20)
        .exec(function (err, docs) {
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