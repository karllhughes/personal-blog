let Document = require('camo').Document;

class Setting extends Document {
  constructor() {
    super();

    this.value = Object;
  }

  static collectionName() {
    return 'settings';
  }
}

module.exports = Setting;