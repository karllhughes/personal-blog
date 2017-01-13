var Db = require('nedb');

var BaseController = {
  // Instantiate the database connection
  db: new Db({ filename: "./database/posts.nosql", autoload: true, inMemoryOnly: false })
};

module.exports = BaseController;