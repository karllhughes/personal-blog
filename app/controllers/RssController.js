var RSS = require('rss');
var BaseController = require('./BaseController');
var filters = require('../filters');

var RssController = Object.create(BaseController);

// Get all posts
RssController.get = function(req, res, next) {

  this.db.find({}, function (err, docs) {
    var feedOptions = {
      title: 'Karls Blog',
      description: 'My personal blog.',
      feed_url: 'http://blog.khughes.me/rss',
      site_url: 'http://blog.khughes.me',
      copyright: '2017 Karl L. Hughes',
      language: 'en',
      pubDate: new Date().toString()
    };

    var rss = new RSS(feedOptions);

    docs.map(function (item) {
      rss.item({
        title: item.title,
        description: filters.parseMarkdown(item.content),
        url: 'http://blog.khughes.me/posts/' + item._id
      });
    });
    res.set('Content-Type', 'application/rss+xml');
    res.send(rss.xml());
  });
};

module.exports = RssController;