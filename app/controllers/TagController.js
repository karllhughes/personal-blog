'use strict';
let BaseController = require('./BaseController');

class TagController extends BaseController {
  get(req, res, next) {
    this.posts.find({"tags._id": req.params.tag})
      .sort({ createdAt: -1 })
      .skip(0)
      .limit(20)
      .exec(function (err, docs) {
      let data = {
        posts: docs,
        title: '"'+req.params.tag+'" Posts'
      };
      res.render('posts/index', data);
    });
  }
}

module.exports = TagController;