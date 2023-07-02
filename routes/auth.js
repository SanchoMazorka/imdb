//const bcrypt = require('bcrypt');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const db = require('../models');
//const salt = bcrypt.genSalt(10);


const validateMail = (req, mail) => {
	const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	if (mail == null) return res.status(400).json({ message: "El campo de mail está vacío." })
	if (emailRegexp.test(mail)) return res.status(400).json({ message: "No es un mail válido." })
};

const validatePass = (req, pass) => {

};

router.post('/register', async (req, res) => {
	console.log("router.post: /register")
	validateMail(res, req.body.mail);
	if (req.body?.pass == null) return res.status(400).json({ message: "El campo de pass está vacío." })
	if (req.body.pass.length < 8) return res.status(400).json({ message: "La contraseña tiene menos de 8 caracteres." })
	
	db.User.create({
		mail: req.body.mail,
		pass: req.body.pass
	}).then(currentUser => {
		const token = jwt.sign({
			mail: req.body.mail,
			pass: req.body.pass,
		}, process.env.JWT_TOKEN, { expiresIn: process.env.JWT_EXPIRE})

		res.cookie('jwt', token, { maxAge: 900000, httpOnly: true })
		return res.status(200).json({currentUser, token})
	});
});

router.post('/login', async (req, res) => {
	console.log("router.post: /login")
	//const password = await bcrypt.hash(req.body.pass, salt);
	db.User.findAll({
		where: { 
			mail: req.body.mail,
			pass: req.body.pass 
		}
	}).then(currentUser => {
		const token = jwt.sign({
			mail: req.body.mail,
			pass: req.body.pass,
		}, process.env.JWT_TOKEN, { expiresIn: process.env.JWT_EXPIRE})
	
		res.cookie('jwt', token, { maxAge: 900000, httpOnly: true })
		return res.status(200).json({currentUser, token})
		//res.sendStatus(200)
	});
});

router.post('/refresh', async (req, res) => {
	console.log("router.post: /refresh")
	const token = jwt.sign({
		mail: req.jwt_authData.mail,
		pass: req.jwt_authData.pass,
	}, process.env.JWT_TOKEN, { expiresIn: process.env.JWT_EXPIRE})

	res.cookie('jwt', token, { maxAge: 900000, httpOnly: true })
	res.sendStatus(200)
})

module.exports = router;
