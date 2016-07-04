const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['mithril', 'js-yaml', 'onecolor', 'base64-arraybuffer']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'build', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
};
