const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const TenantProfile = sequelize.define('TenantProfile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zip_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  web_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  tableName: 'TenantProfile',
  timestamps: false,
});

module.exports = TenantProfile;
