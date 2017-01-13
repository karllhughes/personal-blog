var express = require('express');
var router = express.Router();
var PostsController = require('../controllers/PostsController');
var PostController = require('../controllers/PostController');

/* GET home page. */
router.get('/', function(req, res, next) {
  PostsController.get(req, res, next);
});
/* GET single post page. */
router.get('/posts/:id', function(req, res, next) {
  PostController.get(req, res, next);
});

module.exports = router;
