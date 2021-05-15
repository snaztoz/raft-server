/**
 * App utama (HTTP server).
 */
class App {
  setApp(app) {
    this.app = app
  }

  runAt(port) {
    this.app.listen(port, () => {
      console.log(`[INFO] HTTP Server is running at port ${port}`)
    })
  }
}

module.exports = new App()
