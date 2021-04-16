const jwt = require('express-jwt')
const $SECRET = require('../conf/secret')

const jwtInterceptor = jwt({
  secret: $SECRET,
  algorithms: ['HS256']
}).unless({
  //unless中为不需要检验token的路由
  path: ['/api/register', '/api/login', /^\/render\/.*/]
})

const jwtErrHandler = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({
      msg: 'You are unauthorized.'
    })
  } else {
    next()
  }
}

module.exports = {
  jwtInterceptor,
  jwtErrHandler
}