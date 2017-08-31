const _ = require('lodash');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const backend = {
  entry: path.resolve(__dirname, 'src', 'server.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory'
      }
    ]
  }
};

const frontend = {
  entry: {
    app: path.resolve(__dirname, 'src', 'client.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory'
      }
    ]
  }
}

module.exports = env => {
  return [backend, frontend];
};
