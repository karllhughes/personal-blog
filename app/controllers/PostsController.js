'use strict';
let BaseController = require('./BaseController');
let Post = require('../models/Post');

class PostsController extends BaseController {

  get(req, res, next) {

    // Main query for db
    let query = this.getQuery(req.params, req.query);

    // Options for query
    let options = this.getOptions(req.params, req.query);

    // Carry out the query and call the view render function
    Post.find(query, options).then(
      (posts) => this.renderView(posts, req, res, next)
    );
  }

  getOptions(params, query) {
    return {
      sort: '-createdAt',
      limit: this.getLimit(query.per_page),
      skip: this.getSkip(query.page, query.per_page)
    }
  }

  getQuery(params) {
    return {};
  }

  getTitle(params) {
    return "All Posts";
  }

  renderView(posts, req, res, next) {
    // Page title
    let title = this.getTitle(req.params, req.query);

    // Clean the posts
    posts = posts.map((post) => this.cleanPost(post));

    // Render the view
    res.render('posts/index', { posts: posts, title: title });
  }
}

module.exports = PostsController;