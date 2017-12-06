import Koa from 'koa'
import logger from 'koa-logger'
import serve from 'koa-static'
import compress from 'koa-compress'
import _debug from 'debug'
import config from './config'
import error from './middleware/error'

import webpack from 'webpack'
import webpackConfig from '../build/webpack'
import mocking from './middleware/mocking'
import devMiddleware from './middleware/webpack-dev'
import hotMiddleware from './middleware/webpack-hot'

const debug = _debug('koa:server')
const paths = config.paths

// Koa application is now a class and requires the new operator.
const app = new Koa()
app.use(logger())

// last
app.use(error())

// ------------------------------------
// Apply Webpack DEV/HMR Middleware
// ------------------------------------
if (app.env === 'production') {
  app.use(compress())
  // static with cache
  app.use(serve(paths.dist(), {
    maxAge: 365 * 24 * 60 * 60
  }))
} else {
  const compiler = webpack(webpackConfig)
  app.use(devMiddleware(compiler, {
    publicPath: config.compiler_public_path,
    hot: true,
    quiet: config.compiler_quiet,
    noInfo: config.compiler_quiet,
    lazy: false
  }))
  app.use(hotMiddleware(compiler))
}

// mock
app.use(mocking({
  root: paths.base(),
  matcher: '/apis/'
}))

// server config
const { server_host, server_port } = config
const args = [server_port]
if (server_host) {
  args.push(server_host)
}
args.push(err => {
  if (err) {
    debug(err)
    return
  }
  debug('Server is now running at %s:%s.', server_host, server_port)
})

export default app.listen(...args)
