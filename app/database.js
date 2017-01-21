'use strict';
let Db = require('nedb');

let database = {
  posts: new Db({
    filename: "./database/posts.nosql",
    autoload: true,
    inMemoryOnly: false,
    timestampData: true
  }),
  settings: new Db({ filename: "./database/settings.nosql", autoload: true, inMemoryOnly: false })
};

module.exports = database;