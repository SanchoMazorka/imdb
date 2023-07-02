//const bcrypt = require('bcrypt');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

router.use('*', async (req, res, next) => {
	console.log("router.use: *")
	if (req.originalUrl==='/api/user/login') return next()
	if (req.cookies?.jwt===undefined) return res.status(403).json({'status': 'cookie not found'})

	jwt.verify(req.cookies.jwt, process.env.JWT_TOKEN, (err, authData) => {
		if (err) return res.sendStatus(403)
		req.jwt_authData = authData
		return next()
	})
})

module.exports = router;