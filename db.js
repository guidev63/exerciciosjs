const sequelize = require('sequelize');
const database = require('./db');

const Produto = database.define('produto', {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: sequelize.STRING,
    allowNull: false,
  },
  preço: {
    type: sequelize.DECIMAL,
  },
  descriçao: {
    type: sequelize.STRING,
  },
});

module.exports = Produto;
