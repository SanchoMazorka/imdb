const express = require('express');
const app = express();
const router = express.Router()
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const db = require('./models');

// import routes
//const crudRoutes = require('./routes/crud');

// setting middleware
app.get('*', (req, res) => {
	db.Show.findAll({
		where: {id: 1},
		include: [
			{
				model: db.Season,
				include:	db.Chapter 
			}]
	}).then( 
		movie => res.json(movie)
	)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`servidor andando en: ${PORT}`))

