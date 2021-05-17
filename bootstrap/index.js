module.exports = async function() {
  // Instance dari server, connection ke database, dll
  const internal = require('../internal')
  const log = require('../internal/utils/logger')

  log('INFO', 'Bootstrapping application')

  /*
   * Bootstrapping server
   */
  await (async function() {
    log('INFO', 'Setting up the server')

    const expressApp = require('express')()
    const app = require('http').createServer(expressApp)
    internal.app.setApp(app)

    log('SUCCESS', 'Server is ready')
  })()

  /*
   * Bootstrapping ORM
   */
  await (async function() {
    log('INFO', 'Connecting to database')

    const { Sequelize } = require('sequelize')
    internal.orm
      .set(
        new Sequelize(
          process.env.DB_NAME,
          process.env.DB_USERNAME,
          process.env.DB_PASSWORD,
          {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
          }
        )
      )

    try {
      await internal.orm.get().authenticate()
    } catch (err) {
      log('ERR', `Failed at connecting to database. code: ${err}`)
      throw err
    }

    log('SUCCESS', 'Database is connected')
  })()

  /*
   * Bootstrapping models
   */
  await (async function() {
    log('INFO', 'Synchronizing models')

    // register semua model
    const models = require('../models')
    for (const modelName in models) {
      try {
        internal.orm
          .get()
          .define(modelName, models[modelName])
      } catch (err) {
        log('ERR', `Failed at registering model ${modelName}. code: ${err}`)
        throw err
      }
    }

    // memasang relationship antar tabel
    require('../models/associations')(internal.orm.get())

    await internal.orm.get().sync()

    log('SUCCESS', 'Models are ready')
  })()

  log('SUCCESS', 'Application is ready to run!')
}
