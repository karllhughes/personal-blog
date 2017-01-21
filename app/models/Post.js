let Document = require('camo').Document;

class Post extends Document {
  constructor() {
    super();

    this.title = String;
    this.content = String;
    this.imageUrl = String;
    this.postUrl = String;
    this.type = String;
    this.tags = [
      { _id: String }
    ];
    this.createdAt = {
      type: Date,
      default: Date.now
    };
    this.updatedAt = {
      type: Date,
      default: Date.now
    };
  }

  static collectionName() {
    return 'posts';
  }
}

module.exports = Post;