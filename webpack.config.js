const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'code/bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}