const { DataTypes } = require('sequelize')

module.exports = {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
}
