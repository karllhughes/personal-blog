'use strict';
let BaseController = require('./BaseController');

class TagController extends BaseController {
  get(req, res, next) {
    this.db.find({"tags._id": req.params.tag}, function (err, docs) {
      let data = {
        posts: docs,
        title: '"'+req.params.tag+'" Posts'
      };
      res.render('posts/index', data);
    });
  }
}

module.exports = TagController;