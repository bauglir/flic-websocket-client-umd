const path = require('path');
const webpack = require('webpack');

const default_env = {
  development: true
};

module.exports = (environment = default_env) => {
  let ifProd = plugin => environment.production ? plugin : null;
  let removeEmpty = array => array.filter(entry => !!entry);

  return {
    context: path.resolve(__dirname, 'src'),
    devtool: environment.development ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
    entry: {
      index: path.resolve(__dirname, 'src', 'index.js')
    },
    module: {
      rules: [
        {
          include: path.resolve(__dirname, 'src'),
          test: /\.js$/,
          use: [ 'babel-loader' ]
        }
      ]
    },
    output: {
      filename: '[name].js',
      library: 'flicWebSocketClient',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist'),
      sourceMapFilename: '[name].map'
    },
    plugins: removeEmpty([
      ifProd(new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
      }))
    ]),
    target: 'web',
    watch: !!environment.development
  };
};
