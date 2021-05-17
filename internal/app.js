const log = require('./utils/logger')

/**
 * App utama (HTTP server).
 */
class App {
  setApp(app) {
    this.app = app
  }

  runAt(port) {
    this.app.listen(port, () => {
      log('INFO', `Application is running at port ${port}`)
    })
  }
}

module.exports = new App()
