const { DataTypes } = require('sequelize')

module.exports = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  // nama chatroom, digunakan ketika chatroom berisikan
  // lebih dari 2 user (group chat)
  name: {
    type: DataTypes.STRING,
  }
}
