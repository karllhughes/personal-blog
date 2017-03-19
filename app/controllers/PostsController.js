'use strict';
let BaseController = require('./BaseController');
let Post = require('../models/Post');

class PostsController extends BaseController {

  get(req, res, next) {

    // Main query for db
    let query = this.getQuery(req.params, req.query);

    // Options for query
    let options = this.getOptions(req.params, req.query);

    Post.count(query, options).then((postCount) => {
      // Set the pagination
      let lastPage = Math.ceil(postCount / this.getLimit(query.per_page));
      if (res.locals.pagination.currentPage >= lastPage) {
        res.locals.pagination.nextLink = null;
      }

      // Get the posts, render the view
      Post.find(query, options).then(
        (posts) => this.renderView(posts, req, res, next)
      );
    });
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

    if (posts && posts.length >= 1) {
      // Clean the posts
      posts = posts.map((post) => this.cleanPost(post));

      // Render the view
      res.render('posts/index', {posts: posts, title: title});
    } else {
      res.status(404).render('posts/404');
    }
  }
}

module.exports = PostsController;