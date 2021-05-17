module.exports = async function() {
  // Instance dari server, connection ke database, dll
  const internal = require('../internal')

  console.log('[INFO] Bootstrapping application')


  // bootstrapping server
  const expressApp = require('express')()
  const app = require('http').createServer(expressApp)
  internal.app.setApp(app)


  // bootstrapping orm
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
    console.log(`[ERR] Failed at connecting to database. code: ${err}`)
    throw err
  }


  console.log('[INFO] Application is ready to run')
}
