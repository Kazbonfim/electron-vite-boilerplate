const sequelize = require('../database/sqlite');
const { DataTypes } = require('sequelize');

// Exemplo de modelo User
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING(50), // Tipo String, limite de 50 caracteres
    allowNull: false, // Permitir valores nulos?
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }
})

module.exports = User;
