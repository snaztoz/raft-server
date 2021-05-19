module.exports.bootstrap = async function() {
  const internal = require('../internal')
  const log = require('../internal/utils/logger')

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
}
