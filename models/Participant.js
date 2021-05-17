const { DataTypes } = require('sequelize')

module.exports = {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  }
}
