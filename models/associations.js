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
  const Message = sequelize.models.Message

  User.hasMany(Message, { foreignKey: 'email' })
  Message.belongsTo(User)
}
