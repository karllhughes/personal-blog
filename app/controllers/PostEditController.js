'use strict';
let BaseController = require('./BaseController');

class PostEditController extends BaseController {
  getEdit(req, res, next) {
    let self = this;
    this.posts.findOne({"_id": req.params.id}, function (err, doc) {
      if (doc) {
        // Render the page
        return res.render('posts/edit', {post: doc, title: self.getTitle(doc.title)});
      }
      return res.status(404).render('posts/404');
    });
  }

  getAdd(req, res, next) {
    return res.render('posts/add', {title: 'Add Post'});
  }

  postAdd(req, res, next) {
    let self = this;
    let data = req.body;
    self.hasRequiredFields(data, function (data) {
      self.hasId(data, function (data) {
        console.log(data);
        self.posts.insert(data, function (err, newData) {
          console.log(newData);
          return res.redirect('/posts/'+newData._id);
        });
      });
    }, function() {
      res.redirect('/');
    });
  }

  getTitle(postTitle) {
    return "Editing \""+postTitle+"\"";
  }

  hasRequiredFields(data, callback, error) {
    if (data.title && data.content && data.type) {
      return callback(data);
    } else {
      return error();
    }
  }

  hasId(data, callback) {
    let self = this;
    if (data._id) {
      this.posts.findOne({"_id": data._id}, function (err, doc) {
        if (doc) {
          delete data._id;
          return self.hasId(data, callback);
        } else {
          return callback(data);
        }
      });
    } else {
      delete data._id;
      return callback(data);
    }
  }
}

module.exports = PostEditController;