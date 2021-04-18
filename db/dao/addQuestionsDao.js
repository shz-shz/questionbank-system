const mysql = require('mysql')
const $single = require('../../conf/mysql_single')
const $sql = require('../sql/addQuestionSqlMapping')
const fs = require('fs')
const pool = mysql.createPool($single)

module.exports = {
	addQuestions: (req, res) => {
		pool.getConnection((err, connection) => {
			const params = [req.body.uploader, req.body.type, req.body.question, req.body.tag, req.body.optionA, req.body.optionB, req.body.optionC, req.body.optionD, req.body.answer, req.body.analysis]
			connection.query($sql.manualUploadInsert, params, (err) => {
				if (err) {
					console.log(err)
				}
				console.log('added!')
				connection.release()
			})
		})
	},
	showToBeEditedQuestion: (req, res) => {
		return new Promise((resolve, reject) => {
			pool.getConnection((err, connection) => {
				if (err) {
					reject(new Error('mistake in showToBeEditedQuestion'))
				}
				let promise = new Promise((resolve, reject) => {
					connection.query($sql.editSelect, req.query.id, (err, queryResult) => {
						if (err) {
							reject(new Error('mistake in showToBeEditedQuestion query'))
						}
						connection.release()
						resolve(queryResult)
					})
				}).catch(() => {})
				resolve(promise)
			})
		}).catch(() => {})
	},
	editQuestion: (req, res) => {
		pool.getConnection((err, connection) => {
			const params = [
				req.body.uploader,
				req.body.type,
				req.body.question,
				req.body.tag,
				req.body.optionA,
				req.body.optionB,
				req.body.optionC,
				req.body.optionD,
				req.body.answer,
				req.body.analysis,
				req.body.id,
			]
			connection.query($sql.editUpdate, params, (err) => {
				if (err) {
					console.log(err)
				}
				console.log('updated!')
				connection.release()
			})
		})
	},
	addMultiQuestions: (req, res) => {
		fs.readFile(req.files.myfile.path, (err, data) => {
			if (err) return res.send(err)
			data = data.toString()
			var dataparse = data.split('\n')
			var json = { questions: [] }
			for (var i = 0; i < dataparse.length; i = i + 7) {
				var newdata = {}
				newdata.uploader = req.body.uploader
				newdata.tag = req.body.tag
				newdata.type = req.body.type
				newdata.question = dataparse[i].replace(/[\r\n]/g, '')
				newdata.optionA = dataparse[i + 1].substr(2).replace(/[\r\n]/g, '')
				newdata.optionB = dataparse[i + 2].substr(2).replace(/[\r\n]/g, '')
				newdata.optionC = dataparse[i + 3].substr(2).replace(/[\r\n]/g, '')
				newdata.optionD = dataparse[i + 4].substr(2).replace(/[\r\n]/g, '')
				newdata.answer = dataparse[i + 5].replace(/[\r\n]/g, '')
				newdata.analysis = dataparse[i + 6].replace(/[\r\n]/g, '')
				json.questions.push(newdata)
			}
			pool.getConnection((err, connection) => {
				for (var j = 0; j < json.questions.length; j++) {
					const params = []
					params.push(json.questions[j].uploader)
					params.push(json.questions[j].type)
					params.push(json.questions[j].question)
					params.push(json.questions[j].tag)
					params.push(json.questions[j].optionA)
					params.push(json.questions[j].optionB)
					params.push(json.questions[j].optionC)
					params.push(json.questions[j].optionD)
					params.push(json.questions[j].answer)
					params.push(json.questions[j].analysis)
					connection.query($sql.multiUploadInsert, params, (err) => {
						if (err) {
							console.log(err)
						}
						console.log('uploaded!')
					})
				}
				connection.release()
			})
		})
	},
	deleteQuestion: (req, res) => {
		pool.getConnection((err, connection) => {
			const id = req.query.id
			connection.query($sql.deleteQuestion, id, (err) => {
				if (err) {
					console.log(err)
				}
				console.log('deleted!')
				connection.release()
			})
		})
	},
}
