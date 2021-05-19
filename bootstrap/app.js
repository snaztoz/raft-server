module.exports.bootstrap = async function() {
  const internal = require('../internal')
  const log = require('../internal/utils/logger')

  log('INFO', 'Setting up the server')

  const expressApp = require('express')()
  const app = require('http').createServer(expressApp)
  internal.app.setApp(app)

  log('SUCCESS', 'Server is ready')
}
