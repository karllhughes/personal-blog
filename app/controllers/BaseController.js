'use strict';
let filters = require('../filters');
let database = require('../database');
let moment = require('moment');

const startingPage = 1;
const perPage = 20;

class BaseController {
  constructor() {
    this.posts = database.posts;
    this.filters = filters;
  }

  cleanPost(post) {
    post.content = this.filters.parseMarkdown(post.content);
    post.summary = this.filters.getFirstWords(post.content, 30);
    post.date = moment(post.createdAt).format('MMMM D, YYYY');
    return post;
  }

  getSkip(page, per_page) {
    page = page ? parseInt(page) : startingPage;
    per_page = this.getLimit(per_page);
    return (page * per_page) - per_page;
  }

  getLimit(per_page) {
    return per_page ? parseInt(per_page) : perPage;
  }
}

module.exports = BaseController;