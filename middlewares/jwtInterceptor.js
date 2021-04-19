const ejwt = require('express-jwt')
const jwt = require('jsonwebtoken')
const $SECRET = require('../conf/secret')

const jwtInterceptor = (req, res, next) => {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]

	if (token == null) return res.sendStatus(401)

	jwt.verify(token, $SECRET, (err, user) => {
		if (err) {
			console.log(err)
			return res.sendStatus(403)
		}
		req.user = user
		next()
	})
}

const jwtErrHandler = (err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).send({
			msg: 'You are unauthorized.',
		})
	} else {
		next()
	}
}

module.exports = {
	jwtInterceptor,
	jwtErrHandler,
}
