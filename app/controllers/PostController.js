'use strict';
let BaseController = require('./BaseController');

class PostController extends BaseController {
  get(req, res, next) {
    let filters = this.filters;
    this.db.findOne({"_id": req.params.id}, function (err, doc) {

      // Parse markdown
      doc.content = filters.parseMarkdown(doc.content);

      // Render the page
      res.render('posts/single', {post: doc, title: doc.title});
    });
  }
}

module.exports = PostController;