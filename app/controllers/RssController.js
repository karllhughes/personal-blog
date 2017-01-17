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

      let rss = self.addItemsToFeed(self.createFeed(res.locals.settings), docs);

      res.set('Content-Type', 'application/rss+xml');
      res.send(rss.xml());
    });
  }

  createFeed(settings) {
    let feedOptions = {
      title: settings.siteName,
      description: settings.siteDescription,
      feed_url: settings.baseUrl + '/rss',
      site_url: settings.baseUrl,
      copyright: settings.year + ' ' + settings.authorName,
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