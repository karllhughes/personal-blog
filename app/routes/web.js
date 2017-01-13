var express = require('express');
var router = express.Router();
var PostController = require('../controllers/PostController');
var PostsController = require('../controllers/PostsController');
var RssController = require('../controllers/RssController');
var TagController = require('../controllers/TagController');
var TypeController = require('../controllers/TypeController');

/* GET home page. */
router.get('/', function(req, res, next) {
  PostsController.get(req, res, next);
});
/* GET single post page. */
router.get('/posts/:id', function(req, res, next) {
  PostController.get(req, res, next);
});
/* GET posts by type. */
router.get('/types/:type', function(req, res, next) {
  TypeController.get(req, res, next);
});
/* GET posts by tag. */
router.get('/tags/:tag', function(req, res, next) {
  TagController.get(req, res, next);
});
/* GET rss feed of posts. */
router.get('/rss', function(req, res, next) {
  RssController.get(req, res, next);
});

module.exports = router;
