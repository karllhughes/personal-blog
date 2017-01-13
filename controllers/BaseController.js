var Db = require('nedb');
var marked = require('marked');

var BaseController = {
  // Instantiate the database connection
  db: new Db({ filename: "./database/posts.nosql", autoload: true, inMemoryOnly: false }),

  // Parse markdown content
  parseMarkdown: function(markdown) {
    return marked(markdown);
  }
};

module.exports = BaseController;