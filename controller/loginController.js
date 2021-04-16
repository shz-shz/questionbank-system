const loginDao = require('../db/dao/loginDao')

//注册
exports.register = (req, res) => {
  loginDao.register(req)
    .then((result) => result)
    .then((result) => {
      res.send(result)
    })
}

//登录
exports.login = (req, res) => {
  loginDao.login(req)
    .then((result) => result)
    .then((result) => {
    res.send(result)
  })
}