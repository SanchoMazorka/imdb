const express = require('express');
const app = express();
const router = express.Router()

const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const Sequelize = require("sequelize");
const dotenv = require('dotenv');
dotenv.config();
const db = require('./models');

// import routes
const { sequelize } = require('./models');
const middlewareRoutes = require('./routes/middleware');
const authRoutes = require('./routes/auth');
const crudRoutes = require('./routes/crud');

// setting middleware
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(cookieParser())

// route middlewares
app.use('*', middlewareRoutes);
app.use('/api/user', authRoutes);
app.use('/api/crud', crudRoutes);

// hash contraseña

/* db.sequelize.sync().then(
	() => db.Director.findAll(
		{
			where: {id: 1},
			include: [db.Movie, db.Genre]
		}
		).then( 
		movie => console.log(movie)
	) 
) */

/* db.sequelize.sync().then(
	() => db.Movie.findAll(
		{
			where: { id: 1},
			include: [db.Director,db.Genre]
		}
	).then( 
		movie => console.warn(movie[0].dataValues )
	) 
) */

//the_movie.save();

const PORT = process.env.PORT || 3001;
db.sequelize.sync().then(
	app.listen(PORT, () => console.log(`servidor andando en: ${PORT}`))
);
