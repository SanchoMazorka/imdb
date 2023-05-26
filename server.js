const express = require('express');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const Sequelize = require("sequelize");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// import routes
const authRoutes = require('./routes/auth');

// setting middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// route middlewares
app.use('/api/user', authRoutes);




// access config var
//process.env.TOKEN_SECRET;

/*const sequelize = new Sequelize(
	process.env.DB,
	process.env.DBUSER,
	process.env.DBPASS,
  {
    host: process.env.DBHOST,
    dialect: 'mariadb'
  }
);

sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})*/

