//const bcrypt = require('bcrypt');
const router = require('express').Router();
const { Op } = require("sequelize");
const db = require('../models');

router.get('/test/:id', async (req, res) => {

	let dbQuery = {movie: {}}
	if (req.query?.year) dbQuery.movie = {'year': req.query.year}
	else if (req.query?.country) dbQuery.movie = {'country': req.query.country}
	else if (req.query?.id) dbQuery.movie = {'id': req.query.id}
	

	dbQuery.order = [[req.query?.orderBy?req.query.orderBy:'id', req.query?.desc?'DESC':'ASC']]
	if (req.query?.director) dbQuery.director = {'id': req.query.director}
	if (req.query?.actor) dbQuery.actor = {'id': req.query.actor}
	if (req.query?.genre) dbQuery.genre = {'id': req.query.genre}

	try{
		await db.Movie.findAll({
			where: dbQuery.movie,
			order: dbQuery.order,
			include: [
				{ model: db['Director'], attributes: ['firstName', 'lastName'], where: dbQuery.director },
				{ model: db.Actor, attributes: ['firstName', 'lastName'], through: {attributes: []}, where: dbQuery.actor },
				{ model: db.Genre, attributes: ['name'], through: {attributes: []}, where: dbQuery.genre },
			]
		}).then( 
			show => res.json(show===null?{}:show)
		)
	}catch(error){
		res.json({'error': error?.parent?.sqlMessage})
	}

});

router.get('/movies', async (req, res) => {
	await db.Movie.findAll({
		attributes: ['id', 'title'], 
	}).then( 
		movies => res.json(movies)
	)
});

router.get('/movie/:id', async (req, res) => {
	await db.Movie.findOne({
		where: {'id': req.params.id},
		include: [
			{model: db.Director, attributes: ['firstName', 'lastName']},
 			{model: db.Actor, attributes: ['firstName', 'lastName'], through: {attributes: []}},
			{model: db.Genre, attributes: ['name'], through: {attributes: []}}
		]
	}).then( 
		show => res.json(show)
	)
});

router.get('/shows', async (req, res) => {
	await db.Show.findAll({
		attributes: ['id', 'title'], 
	}).then( 
		shows => res.json(shows)
	)
});

router.get('/show/:id', async (req, res) => {
	await db.Show.findOne({
		where: {'id': req.params.id},
		include: [
			{model: db.Season, include:	{model: db.Chapter} }
		]
	}).then( 
		show => res.json(show)
	)
});

router.post('/actor', async (req, res) => {
	await db.Actor.findOrCreate({
		where: {
			'firstName': req.query.firstName,
			'lastName': req.query.lastName
		},
		defaults: {
			'firstName': req.query.firstName,
			'lastName': req.query.lastName,
			'gender': req.query.gender,
			'dob': req.query.dob
		}
	}).then( result => {
		if (result[1]) {
			res.status(201).json(result)
		} else {
			res.status(400).json(result)
		}
	})
});

router.post('/director', async (req, res) => {
	await db.Director.findOrCreate({
		where: {
			'firstName': req.query.firstName,
			'lastName': req.query.lastName
		},
		defaults: {
			'firstName': req.query.firstName,
			'lastName': req.query.lastName
		}
	}).then( result => {
		if (result[1]) {
			res.status(201).json(result)
		} else {
			res.status(400).json(result)
		}
	})
});

router.post('/genre', async (req, res) => {
	await db.Genre.findOrCreate({
		where: {
			'name': req.query.name,
		},
		defaults: {
			'name': req.query.name,
		}
	}).then( result => {
		if (result[1]) {
			res.status(201).json(result)
		} else {
			res.status(400).json(result)
		}
	})
});

module.exports = router;