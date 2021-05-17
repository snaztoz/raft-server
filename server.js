require('dotenv').config()

const bootstrap = require('./bootstrap')

bootstrap()
  .then(() => {
    require('./internal').app.runAt(process.env.SERVER_PORT)
  })
  .catch(() => {
    console.log('[ERR] Failed to start the server. Exit...')
  })
