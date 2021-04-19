const ejwt = require('express-jwt')
const jwt = require('jsonwebtoken')
const $SECRET = require('../conf/secret')

const jwtInterceptor = (req, res, next) => {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]

	if (token == null) return res.sendStatus(401)

	jwt.verify(token, $SECRET, (err, user) => {
		if (err) {
			if (err.name === 'TokenExpiredError') {
				return res.status(401).send({
					msg: 'Token Expired.',
				})
			} else if (err.name === 'UnauthorizedError') {
				return res.status(401).send({
					msg: 'You are unauthorized.',
				})
			}
		}
		req.user = user
		next()
	})
}

module.exports = {
	jwtInterceptor,
}
