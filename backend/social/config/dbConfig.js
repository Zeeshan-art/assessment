const { Sequelize } = require('sequelize');
// Database configuration
const HOST = process.env.POSTGRES_HOST;
const USERNAME = process.env.POSTGRES_USERNAME;
const PASSWORD = process.env.POSTGRES_PASSWORD;
const DATABASE = process.env.POSTGRES_CONNECTION;

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DATABASE,
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully ');
} catch (error) {
  console.error('unable to connect to the database : ', error);
}

module.exports = sequelize;