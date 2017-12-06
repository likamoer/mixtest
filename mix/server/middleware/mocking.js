import { join } from 'path'
import fs from 'fs'
import send from 'koa-send'
import _debug from 'debug'

const debug = _debug('koa:mocking')

const fileExists = path => {
  try {
    const stats = fs.statSync(path)
    return stats.isFile()
  } catch (e) {
    return false
  }
}

export default ({ root, matcher }) => {
  debug('Enable mocking middleware.')

  return async (ctx, next) => {
    const file = join(matcher, ctx.path)
    const json = file + '.json'
    const module = file + '.js'

    if (fileExists(join(root, file))) {
      if (await send(ctx, file, { root })) {
        debug('Mock file found: %s', file)
        return
      }
    } else if (fileExists(join(root, json))) {
      if (await send(ctx, json, { root })) {
        debug('Mock file found: %s', json)
        return
      }
    } else if (fileExists(join(root, module))) {
      const absolutePath = join(root, module)
      // delete cache
      if (require.cache[absolutePath]) {
        delete require.cache[absolutePath]
      }

      try {
        const result = require(absolutePath)
        if (typeof result === 'function') {
          result(ctx, next)
        } else if (typeof result === 'object') {
          ctx.body = JSON.stringify(result)
        } else {
          ctx.body = result
        }
      } catch (e) {
        const response = ctx.response
        response.status = 500
        throw e
      }
      debug('Mock file found: %s', module)
      return
    }

    await next()
  }
}
