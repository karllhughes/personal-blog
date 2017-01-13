var Db = require('nedb');
var db = new Db({ filename: "./database/prod.nosql", autoload: true, inMemoryOnly: false });

var posts = {
  get: function(req, res, next) {
    db.find({}, function (err, docs) {
      console.log(docs);
      return res.render('index', { title: 'My cool Blog' });
    });
  }
};

module.exports = posts;