'use strict';
let PostsController = require('./PostsController');
let RSS = require('rss');

class RssController extends PostsController {

  renderView(posts, req, res, next) {
    // Create the rss feed
    let rss = this.addItemsToFeed(
      this.createFeed(res.locals.settings),
      posts
    );

    // Return a response
    res.set('Content-Type', 'application/rss+xml');
    res.send(rss.xml());
  }

  createFeed(settings) {
    let feedOptions = {
      title: settings.siteName,
      description: settings.siteDescription,
      feed_url: settings.baseUrl + 'rss',
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
        description: self.getContent(item),
        url: rss.site_url + 'posts/' + item._id
      });
    });
    return rss;
  }

  getContent(item) {
    let image = item.imageUrl ? "<img src='"+ item.imageUrl +"' alt='"+ item.title +"'/>" : "";
    let content = image + "<br/><br/>" + this.filters.parseMarkdown(item.content);
    return content;
  }
}

module.exports = RssController;