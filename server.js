const express = require('express');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const Sequelize = require("sequelize");
const dotenv = require('dotenv');
dotenv.config();
const db1 = require('./models');
const app = express();

// import routes
const authRoutes = require('./routes/auth');
const { sequelize } = require('./models');

// setting middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// route middlewares
app.use('/api/user', authRoutes);




// access config var
//process.env.TOKEN_SECRET;

/* 
sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
}); */

db1.sequelize.sync().then(
	() => db1.Director.findAll(
		{
			where: { id: 1},
			include: [db1.Movie]
		}
		).then( 
		movie => console.log(movie)
	) 
)

/* db1.sequelize.sync().then(
	() => db1.Movie.findAll(
		{
			where: { id: 1},
			include: [db1.Director]
		}
	).then( 
		movie => console.warn(movie[0].dataValues /* movie.forEach(element => console.log(element.Movie.title) *)
	) 
) */


//the_movie.save();

/*const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})*/

