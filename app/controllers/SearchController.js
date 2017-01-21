'use strict';
let PostsController = require('./PostsController');

class SearchController extends PostsController {

  getQuery(params, query) {
    // Regex it up
    let terms = "^";

    // Loop through terms and adds positive lookahead assertion:
    // http://stackoverflow.com/questions/13911053
    decodeURIComponent(query.q).split(" ").map((t) => {
      terms += '(?=.*\\b'+ t +'\\b)';
    });

    // Create the regex object (case insensitive)
    terms = new RegExp(terms + '.+', 'i');

    return {
      // Match against any one of tags, title, or content
      $or: [
        { "tags._id": terms },
        { "title": terms },
        { "content": terms }
      ]
    };
  }

  getTitle(params, query) {
    return '"'+decodeURIComponent(query.q)+'" Posts';
  }
}

module.exports = SearchController;