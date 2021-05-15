require('dotenv').config()

require('./bootstrap')

require('./internal').app.runAt(process.env.SERVER_PORT)
