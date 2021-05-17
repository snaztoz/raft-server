require('dotenv').config()

const bootstrap = require('./bootstrap')
const log = require('./internal/utils/logger')

bootstrap()
  .then(() => {
    require('./internal').app.runAt(process.env.SERVER_PORT)
  })
  .catch(() => {
    log('ERR', 'Failed to start the server. Exit...')
  })
