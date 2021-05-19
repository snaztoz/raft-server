module.exports.bootstrap = async function() {
  const internal = require('../internal')
  const log = require('../internal/utils/logger')

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
}
