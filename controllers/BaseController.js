var Db = require('nedb');

var BaseController = {
  db: new Db({ filename: "./database/posts.nosql", autoload: true, inMemoryOnly: false })
};

module.exports = BaseController;