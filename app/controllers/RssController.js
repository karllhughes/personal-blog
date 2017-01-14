'use strict';
let BaseController = require('./BaseController');
let RSS = require('rss');

class RssController extends BaseController {

  get(req, res, next) {
    let self = this;

    this.posts.find({})
      .sort({ createdAt: -1 })
      .skip(self.getSkip(req.query.page, req.query.per_page))
      .limit(self.getLimit(req.query.per_page))
      .exec(function (err, docs) {

      let rss = self.addItemsToFeed(self.createFeed(), docs);

      res.set('Content-Type', 'application/rss+xml');
      res.send(rss.xml());
    });
  }

  createFeed() {
    let feedOptions = {
      title: 'Karls Blog',
      description: 'My personal blog.',
      feed_url: 'http://blog.khughes.me/rss',
      site_url: 'http://blog.khughes.me',
      copyright: '2017 Karl L. Hughes',
      language: 'en',
      pubDate: new Date().toString()
    };
    return new RSS(feedOptions);
  }

  addItemsToFeed(rss, items) {
    let self = this;
    items.map(function (item) {
      rss.item({
        title: item.title,
        description: self.filters.parseMarkdown(item.content),
        url: 'http://blog.khughes.me/posts/' + item._id
      });
    });
    return rss;
  }
}

module.exports = RssController;