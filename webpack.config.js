const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        },
      },
      {
          test: /\.css?$/,
          loader: 'style-loader!css-loader',
          options: {
            sourceMap: true, // allow source maps (allows css debugging)
            modules: true, // allow css module imports
            camelCase: true, // allow camel case imports
            localIdentName: '[local]___[hash:base64:5]', // set imported classNames with a original className and a hashed string in the DOM, for example: "exampleClassName__2fMQK"
          },
       }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
};
