// Instance dari server, connection ke database, dll
const internal = require('../internal')

console.log('[INFO] Bootstrapping application')

// bootstrapping server
const expressApp = require('express')()
const app = require('http').createServer(expressApp)
internal.app.setApp(app)

console.log('[INFO] Application is ready to run')
