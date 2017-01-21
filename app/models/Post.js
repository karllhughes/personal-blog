let Document = require('camo').Document;

class Post extends Document {
  constructor() {
    super();

    this.title = {
      type: String,
      required: true
    };

    this.content = {
      type: String,
      required: true
    };

    this.type = {
      type: String,
      required: true,
      choices: ['blog', 'link', 'page', 'project']
    };

    this.imageUrl = String;

    this.postUrl = String;

    this.tags = [Object];

    this.createdAt = {
      type: Date,
      default: new Date()
    };

    this.updatedAt = {
      type: Date,
      default: new Date()
    };
  }

  static collectionName() {
    return 'posts';
  }

  static clean(data) {
    // If id is empty string then delete it
    if (data._id === "") {
      delete data._id;
    }
    // Parse out tags
    data.tags = data.tags.split(', ').map((tag) => { return { _id: tag } });

    return data;
  }
}

module.exports = Post;