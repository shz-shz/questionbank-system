const loginDao = require('../db/dao/loginDao')
const userInfoDao = require('../db/dao/userInfoDao')

//注册
exports.register = (req, res) => {
	loginDao
		.register(req)
		.then((result) => result)
		.then((result) => {
			res.send(result[0])
			//仅当用户是第一次注册时才新增用户信息
			if (result[1]) {
				const newId = result[1].newId
				console.log(newId)
				userInfoDao
					.initUserInfo(newId, req, res)
					.then((result) => result)
					.then((result) => {
						console.log(result)
					})
			}
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
