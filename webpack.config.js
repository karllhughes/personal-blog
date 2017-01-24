module.exports = {
  entry: "./entry.js",
  output: {
    path: './public',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=images/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(ico|txt)$/i,
        loaders: [
          'file?name=[name].[ext]'
        ]
      }
    ]
  }
};
