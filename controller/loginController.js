const loginDao = require('../db/dao/loginDao')
const userInfoDao = require('../db/dao/userInfoDao')

//注册
exports.register = (req, res) => {
	loginDao
		.register(req)
		.then((result) => result)
		.then((result) => {
			const newId = result[1].newId
			res.send(result[0])
			userInfoDao
				.initUserInfo(newId, req, res)
				.then((result) => result)
				.then((result) => {
					console.log(result)
				})
		})
}

//登录
exports.login = (req, res) => {
	loginDao
		.login(req)
		.then((result) => result)
		.then((result) => {
			res.send(result[0])
		})
}
