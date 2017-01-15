'use strict';
let marked = require('marked');

let filters = {

  // List of allowed types
  allowedTypes() {
    return [
      'blog',
      'link',
      'page',
      'project'
    ];
  },

  // Filters only allowed types
  isValidType(inputType) {
    return this.allowedTypes().filter(function (type) {
      return type === inputType;
    })[0];
  },

  // Parse markdown content
  parseMarkdown(markdown) {
    return marked(markdown);
  },

  // Transforms words to uppercase
  ucwords(str) {
    return (str + '')
      .replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) {
        return $1.toUpperCase()
      })
  },

  getFirstWords(string, num) {
    return string.split(/\s+/).slice(0, num).join(" ");
  }
};

module.exports = filters;