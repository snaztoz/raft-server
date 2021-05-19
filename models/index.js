module.exports = {

  // Letakkan semua model yang digunakan di sini. Berikan
  // format seperti berikut:
  //
  //    NamaModel: strukturModel
  //
  // contoh:
  //
  //    const { DataTypes } = require('sequelize')
  //
  //    Foo: {
  //      colA: { ...options... },
  //      colB: { ...options... }
  //    }
  //

  User: require('./User'),
  Message: require('./Message'),
  Chatroom: require('./Chatroom'),
}
