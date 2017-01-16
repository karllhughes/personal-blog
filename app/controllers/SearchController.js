'use strict';
let BaseController = require('./BaseController');

class SearchController extends BaseController {
  get(req, res, next) {
    let self = this;

    // Decode the term from the URI
    let query = decodeURIComponent(req.query.q);

    // Regex it up
    let terms = "^";

    // Loop through terms and adds positive lookahead assertion:
    // http://stackoverflow.com/questions/13911053
    query.split(" ").map((t) => {
      terms += '(?=.*\\b'+ t +'\\b)';
    });

    // Create the regex object (case insensitive)
    terms = new RegExp(terms + '.+', 'i');

    // Find the posts
    this.posts.find({
      // Match against any one of tags, title, or content
      $or: [
        { "tags._id": terms },
        { "title": terms },
        { "content": terms }
      ]
    }).sort({ createdAt: -1 })
      .skip(self.getSkip(req.query.page, req.query.per_page))
      .limit(self.getLimit(req.query.per_page))
      .exec((err, docs) => {
        // Clean the posts
        docs = docs.map((doc) => self.cleanPost(doc));

        // Render the view
        res.render('posts/index', { posts: docs, title: '"'+query+'" Posts' });
    });
  }
}

module.exports = SearchController;