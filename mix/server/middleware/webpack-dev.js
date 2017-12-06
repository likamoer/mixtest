import webpackDevMiddleware from 'webpack-dev-middleware'
import applyExpressMiddleware from '../lib/apply-express-middleware'
import _debug from 'debug'

const debug = _debug('koa:webpack-dev')

export default (compiler, config) => {
  debug('Enable webpack dev middleware.')

  const middleware = webpackDevMiddleware(compiler, config)

  return async function koaWebpackDevMiddleware (ctx, next) {
    /*eslint prefer-const: 0*/
    let hasNext = await applyExpressMiddleware(middleware, ctx.req, {
      end (content) {
        ctx.body = content
      },
      setHeader () {
        ctx.set.apply(ctx, arguments)
      }
    })

    if (hasNext) {
      await next()
    }
  }
}
