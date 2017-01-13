var express = require('express');
var router = express.Router();
var PostsController = require('../controllers/PostsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Load controller
  PostsController.get(req, res, next);
});

module.exports = router;
