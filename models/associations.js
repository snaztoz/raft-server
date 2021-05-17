module.exports =  function(sequelize) {
  
  // Definisikan semua asosiasi antar model di sini
  // contoh:
  //
  //    const Foo = sequelize.models.Foo
  //    const Bar = sequelize.models.Bar
  //
  //    Foo.hasMany(Bar, { options })
  //    Bar.belongsTo(Foo)
  //

  const User = sequelize.models.User
  const Chatroom = sequelize.models.Chatroom
  const Message = sequelize.models.Message

  User.belongsToMany(Chatroom, {
    through: 'UserChatroom',
  })
  Chatroom.belongsToMany(User, {
    through: 'UserChatroom',
  })

  User.hasMany(Message, { foreignKey: 'email' })
  Message.belongsTo(User)

  Chatroom.hasMany(Message, { foreignKey: 'id' })
  Message.belongsTo(Chatroom)
}
