var marked = require('marked');

var filters = {

  // Array of allowed post types
  allowedTypes: [
    'blog',
    'link',
    'page',
    'project'
  ],

  // Filters only allowed types
  isValidType: function (inputType) {
    return this.allowedTypes.filter(function (type) {
      return type === inputType;
    })[0];
  },

  // Parse markdown content
  parseMarkdown: function(markdown) {
    return marked(markdown);
  },

  // Transforms words to uppercase
  ucwords: function (str) {
    return (str + '')
      .replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) {
        return $1.toUpperCase()
      })
  }
};

module.exports = filters;