const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
// const databaseConfig = require('./database/DatabaseConfig');
const sequelize = require('./config/dbConfig');
const routes = require('./routes/routes');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(databaseConfig.initializeDB());

app.use('/api/', routes);

app.post('/', async (req, res) => {

	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('Table created successfully!');
  })
  .catch((error) => {
    console.error('Unable to create table : ', error);
  });

app.listen(process.env.PORT || 4000, async () => {
	
	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});