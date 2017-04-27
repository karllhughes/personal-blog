// Require scss
require("!style-loader!css-loader!sass-loader!./assets/styles/styles.scss");
// Require images
requireAll(require.context('./assets/images/', true, /\.png$/));
// Require favicon
require("./assets/favicon.ico");

function requireAll(r) { r.keys().forEach(r); }
