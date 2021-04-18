const getQuestionsDao = require('../db/dao/getQuestionsDao')

//接口：获取所有题目
exports.getAllQuestions = (req, res) => {
	getQuestionsDao
		.getAllQuestions()
		.then((result) => result)
		.then((result) => {
			res.send(result)
		})
}

//接口：随机获取10道题目
exports.get10RandomQuestions = (req, res) => {
	getQuestionsDao
		.get10RandomQuestions()
		.then((result) => result)
		.then((result) => {
			res.send(result)
		})
}
