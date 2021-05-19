module.exports = async function() {
  const log = require('../internal/utils/logger')

  log('INFO', 'Bootstrapping application')

  await require('./app').bootstrap()
  await require('./orm').bootstrap()
  await require('./models').bootstrap()

  log('SUCCESS', 'Application is ready to run!')
}
