import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import fs from 'fs'
import _debug from 'debug'
import config, { paths } from '../config'
const { __DEV__, __PROD__ } = config.globals

const debug = _debug('koa:webpack:config')

debug('Create configuration.')
const webpackConfig = {
  __DEV__,
  __PROD__,
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    root: paths.src(),
    extensions: ['', '.css', '.js', '.json', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js',
      assets: paths.src('assets'),
      components: paths.src('components'),
      common: paths.src('common'),
      store: paths.src('store'),
      zepto: paths.src('common/lib/zepto/1.1.7/zepto.js')
    },
    modulesDirectories: ['node_modules']
  },
  module: {},
  node: {
    fs: 'empty'
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter'
    // 'vuex': 'Vuex'
  }
}

// ------------------------------------
// Entry Points
// ------------------------------------
webpackConfig.entry = {
  loading: [paths.src('styles/loading.scss')],
  app: ['babel-polyfill', paths.src('index.js')].concat(__PROD__ ? [] : 'webpack-hot-middleware/client')
}

// ------------------------------------
// Bundle Output
// ------------------------------------

webpackConfig.output = {
  path: paths.dist(),
  publicPath: config.compiler_public_path,
  filename: `[name].[${config.compiler_hash_type}].js`,
  chunkFilename: `[id].[${config.compiler_hash_type}].js`
}

// ------------------------------------
// Pre-Loaders
// ------------------------------------

webpackConfig.module.preLoaders = [
  {
    test: /\.(js|vue)$/,
    loader: 'eslint',
    exclude: /node_modules/,
    query: {
      emitWarning: __DEV__
    }
  }
]

// ------------------------------------
// Loaders
// ------------------------------------

const styleLoaders = loaders => {
  if (!__PROD__) {
    return loaders.map(l => l + (['css', 'sass'].indexOf(l) === -1 ? '' : '?sourceMap')).join('!')
  }
  const [first, ...rest] = loaders
  return ExtractTextPlugin.extract(first, rest.join('!'))
}
const cssLoaders = styleLoaders(['vue-style', 'css', 'autoprefixer'])
const sassLoaders = styleLoaders(['vue-style', 'css', 'autoprefixer', 'sass'])

webpackConfig.module.loaders = [{
  test: /\.vue$/,
  loader: 'vue'
}, {
  test: /\.js$/,
  loader: 'babel',
  exclude: /node_modules/
}, {
  test: /\.json$/,
  loader: 'json'
}, {
  test: /\.html$/,
  loader: 'vue-html'
}, {
  test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
  loader: 'url',
  query: {
    limit: 10000,
    name: '[name]-[hash:7].[ext]'
  }
}, {
  test: /\.css$/,
  loader: cssLoaders
}, {
  test: /\.scss$/,
  loader: sassLoaders
}]

webpackConfig.babel = JSON.parse(fs.readFileSync('.babelrc')).env[config.env] || {}

webpackConfig.vue = {
  loaders: {
    sass: sassLoaders,
    js: 'babel'
  },
  preserveWhitespace: false
}

webpackConfig.eslint = {
  formatter: require('eslint-friendly-formatter')
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  // new webpack.optimize.CommonsChunkPlugin('vendor', `vendor.[${config.compiler_hash_type}].js`),
  // generate dist index.html with correct asset hash for caching.
  // you can customize output by editing /index.html
  // see https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: paths.src('index.ejs'),
    hash: false,
    inject: false,
    minify: {
      collapseWhitespace: config.compiler_html_minify,
      minifyJS: config.compiler_html_minify
    }
  })
]

if (__PROD__) {
  debug('Enable plugins for production (OccurenceOrder, Dedupe, UglifyJS & ExtractText).')
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    // extract css into its own file
    new ExtractTextPlugin('[name].[contenthash].css')
  )
} else {
  debug('Enable plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )
}

export default webpackConfig
