require('babel-register')

const debug = require('debug')('koa:bin:compile')

debug('Create webpack compiler.')

require('webpack')(require('../webpack')).run((err, stats) => {
  debug('Webpack compile completed.')

  if (err) {
    debug('Webpack compiler encountered a fatal error.', err)
    process.exit(1)
  } else {
    const jsonStats = stats.toJson()

    process.argv[2] === 'profile' && require('fs').writeFile(`${__dirname}/../../stats.json`, JSON.stringify(stats.toJson('verbose')), () => {})

    console.log(stats.toString({
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: true
    }))
    if (jsonStats.errors.length > 0) {
      debug('Webpack compiler encountered errors.')
      process.exit(1)
    } else if (jsonStats.warnings.length > 0) {
      debug('Webpack compiler encountered warnings.')
    } else {
      debug('No errors or warnings encountered.')
    }
  }
})
