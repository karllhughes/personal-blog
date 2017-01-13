var express = require('express');
var router = express.Router();
var posts = require('../controllers/posts');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Load controller
  posts.get(req, res, next);
});

module.exports = router;
