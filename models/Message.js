const { DataTypes } = require('sequelize')

module.exports = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  content: {
    type: DataTypes.STRING(512),
    allowNull: false,
  },

  timeSent: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}
