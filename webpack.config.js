"use strict";

const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: path.join(__dirname, 'src', 'client', 'app-client.js'),
  devServer: {
    inline: true,
    port: 3333,
    contentBase: "src/static/",
    historyApiFallback: true
  },
  output: {
    path: path.join(__dirname, 'dist', 'static', 'js'),
    publicPath: "/js/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname),
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: debug ? ['react', 'es2015', 'react-hmre'] : ['react', 'es2015']
      }
    }]
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
  ]
};

// const webpack = require('webpack')
// const path = require('path')
//
// module.exports = {
//   entry: path.join(__dirname, 'client', 'index.js'),
//   output: {
//     path: path.join(__dirname, 'server', 'static', 'js'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       test: path.join(__dirname),
//       loader: ['babel-loader'],
//       query: {
//         cacheDirectory: 'babel_cache',
//         presets: ['react', 'es2015']
//       }
//     }]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
//     }),
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: { warnings: false },
//       mangle: true,
//       sourcemap: false,
//       beautify: false,
//       dead_code: true
//     })
//   ]
// }


// var path    = require('path')
// var webpack = require('webpack')
//
// module.exports = {
//   entry: [
//     'webpack-dev-server/client?http://127.0.0.1:8080/',
//     'webpack/hot/only-dev-server',
//     './client',
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   resolve: {
//     modulesDirectories: ['node_modules', 'shared'],
//     extensions: ['', '.js', '.jsx'],
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loaders: ['react-hot', 'babel'],
//       },
//     ],
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin(),
//   ],
//   devtool: 'inline-source-map',
//   devServer: {
//     hot: true,
//     proxy: {
//       '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
//     },
//     host: '127.0.0.1',
//   },
// }


//
// /* eslint-disable */
// const webpack = require('webpack')
// const WebpackDevServer = require('webpack-dev-server')
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
//
// const modulevalues = require('postcss-modules-values')
// const cssnext = require('postcss-cssnext')
// const nested = require('postcss-nested')
// const atImport = require('postcss-import')
// /* eslint-enable */
//
// const PATHS = {
//   src: path.join(__dirname, 'shared/src'),
//   app: path.join(__dirname, 'shared/src/app.js'),
//   dist: path.join(__dirname, 'dist'),
// }
//
// const webpackconfig = {
//   devtool: 'eval-cheap-module-source-map',
//   entry: {
//     app: [
//       'react-hot-loader/patch', // Add react hot loader 3
//       'webpack-dev-server/client', // Webpack dev server
//       'webpack/hot/dev-server', // Webpack dev server auto refresh / hot loading
//       PATHS.app,
//     ],
//   },
//   output: {
//     path: PATHS.dist,
//     filename: '[name].js', // Output name of bundle
//     publicPath: '/',
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/, // Javascript loader
//         include: PATHS.src,
//         exclude: /node_modules/,
//         loader: 'babel',
//         query: {
//           cacheDirectory: true,
//           presets: ['modern-browsers', 'react'],
//           plugins: [
//             'react-hot-loader/babel',
//           ],
//         },
//       },
//       {
//         test: /\.css/,
//         exclude: /node_modules/,
//         loaders: [
//           'style',
//           'css?modules&sourceMap&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
//           'postcss',
//         ],
//       },
//     ],
//   },
//   postcss: () => ([
//     atImport,
//     nested,
//     cssnext,
//     modulevalues,
//   ]),
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(PATHS.src, 'index.html'), // Use index.html as template for index.html
//       chunksSortMode: 'dependency', // Order the dependacy so that bundle comes first
//       filename: 'index.html', // Output file name
//       inject: 'body', // Enject into the end of the body tag
//     }),
//     new webpack.HotModuleReplacementPlugin(), // Auto refresh page
//   ],
// }
//
// new WebpackDevServer(webpack(webpackconfig), {
//   historyApiFallback: true, // Allows reloading of any URL
//   hot: true, // Auto refresh page
//   publicPath: webpackconfig.output.publicPath, // Public bath
//   quiet: false, // Hides Errors
//   stats: {
//     chunks: false, // Hides the build chunks
//     colors: true, // Colors the output
//   },
//   watchOptions: {
//     ignored: /node_modules/, // Don't hot reload node modules
//   },
// }).listen(3000, (err, result) => {
//   if (err) {
//     console.log(err, result) //eslint-disable-line
//   }
//   console.log('Starting the development server on port 3000 👌') //eslint-disable-line
// })
