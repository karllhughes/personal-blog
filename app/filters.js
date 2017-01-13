
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
  }
};

module.exports = filters;