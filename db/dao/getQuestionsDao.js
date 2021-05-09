const { query } = require('express')
const { connection } = require('mongoose')
const mysql = require('mysql')
const $single = require('../../conf/mysql_single')
const $sql = require('../sql/getQuestionSqlMapping')

const pool = mysql.createPool($single)

module.exports = {
	getAllQuestions: (req, res) => {
		return new Promise((resolve, reject) => {
			pool.getConnection((err, connection) => {
				if (err) {
					reject(new Error('mistake in getAllQuestions'))
				}
				const promise = new Promise((resolve, reject) => {
					connection.query($sql.getAllQuestionsSelect, (err, queryResult) => {
						if (err) {
							reject(new Error('mistake in getAllQuestions query'))
						}

						var result = JSON.parse(JSON.stringify(queryResult))

						for (var i = 0; i < result.length; i++) {
							var options = []
							var optionA = {}
							optionA.id = 'A'
							optionA.value = result[i].optionA
							var optionB = {}
							optionB.id = 'B'
							optionB.value = result[i].optionB
							var optionC = {}
							optionC.id = 'C'
							optionC.value = result[i].optionC
							var optionD = {}
							optionD.id = 'D'
							optionD.value = result[i].optionD
							options.push(optionA)
							options.push(optionB)
							options.push(optionC)
							options.push(optionD)
							result[i].options = options

							delete result[i].optionA
							delete result[i].optionB
							delete result[i].optionC
							delete result[i].optionD
						}

						connection.release()
						resolve(result)
					})
				}).catch(() => { })
				resolve(promise)
			})
		}).catch(() => { })
	},
	get10RandomQuestions: (req, res) => {
		return new Promise((resolve, reject) => {
			pool.getConnection((err, connection) => {
				if (err) {
					reject(new Error('mistake in get10RandomQuestions'))
				}
				const promise = new Promise((resolve, reject) => {
					connection.query($sql.get10RandomQuestionsSelect, (err, queryResult) => {
						if (err) {
							reject(new Error('mistake in get10RandomQuestions query'))
						}
						var result = JSON.parse(JSON.stringify(queryResult))

						for (var i = 0; i < result.length; i++) {
							var options = []
							var optionA = {}
							optionA.id = 'A'
							optionA.value = result[i].optionA
							var optionB = {}
							optionB.id = 'B'
							optionB.value = result[i].optionB
							var optionC = {}
							optionC.id = 'C'
							optionC.value = result[i].optionC
							var optionD = {}
							optionD.id = 'D'
							optionD.value = result[i].optionD
							options.push(optionA)
							options.push(optionB)
							options.push(optionC)
							options.push(optionD)
							result[i].options = options

							delete result[i].optionA
							delete result[i].optionB
							delete result[i].optionC
							delete result[i].optionD
						}

						connection.release()
						resolve(result)
					})
				}).catch(() => { })
				resolve(promise)
			})
		}).catch(() => { })
	},
	get10RandomSingleChoiceQuestions: (req, res) => {
		return new Promise((resolve, reject) => {
			pool.getConnection((err, connection) => {
				if (err) {
					reject(new Error('mistake in get10RandomMultipleChoiceQuestions'))
				}
				const promise = new Promise((resolve, reject) => {
					connection.query($sql.get10RandomMultipleChoiceQuestionsSelect, (err, queryResult) => {
						if (err) {
							reject(new Error('mistake in get10RandomMultipleChoiceQuestions query'))
						}

						var result = JSON.parse(JSON.stringify(queryResult))

						for (var i = 0; i < result.length; i++) {
							var options = []
							var optionA = {}
							optionA.id = 'A'
							optionA.value = result[i].optionA
							var optionB = {}
							optionB.id = 'B'
							optionB.value = result[i].optionB
							var optionC = {}
							optionC.id = 'C'
							optionC.value = result[i].optionC
							var optionD = {}
							optionD.id = 'D'
							optionD.value = result[i].optionD
							options.push(optionA)
							options.push(optionB)
							options.push(optionC)
							options.push(optionD)
							result[i].options = options

							delete result[i].optionA
							delete result[i].optionB
							delete result[i].optionC
							delete result[i].optionD
						}

						connection.release()
						resolve(result)
					})
				}).catch(() => { })
				resolve(promise)
			})
		}).catch(() => { })
	},
	get5RandomShortAnswerQuestions: (req, res) => {
		return new Promise((resolve, reject) => {
			pool.getConnection((err, connection) => {
				if (err) {
					reject(new Error('mistake in get5RandomShortAnswerQuestions'))
				}
				const promise = new Promise((resolve, reject) => {
					connection.query($sql.get5RandomShortAnswerQuestionsSelect, (err, queryResult) => {
						if (err) {
							reject(new Error('mistake in get5RandomShortAnswerQuestions query'))
						}
						var result = JSON.parse(JSON.stringify(queryResult))

						for (var i = 0; i < result.length; i++) {
							var options = []
							var optionA = {}
							optionA.id = 'A'
							optionA.value = result[i].optionA
							var optionB = {}
							optionB.id = 'B'
							optionB.value = result[i].optionB
							var optionC = {}
							optionC.id = 'C'
							optionC.value = result[i].optionC
							var optionD = {}
							optionD.id = 'D'
							optionD.value = result[i].optionD
							options.push(optionA)
							options.push(optionB)
							options.push(optionC)
							options.push(optionD)
							result[i].options = options

							delete result[i].optionA
							delete result[i].optionB
							delete result[i].optionC
							delete result[i].optionD
						}

						connection.release()
						resolve(result)
					})
				}).catch(() => { })
				resolve(promise)
			})
		}).catch(() => { })
	},
	get5RandomFillBlankQuestions: (req, res) => {
		return new Promise((resolve, reject) => {
			pool.getConnection((err, connection) => {
				if (err) {
					reject(new Error('mistake in get5RandomShortAnswerQuestions'))
				}
				const promise = new Promise((resolve, reject) => {
					connection.query($sql.get5RandomFillBlankQuestionsSelect, (err, queryResult) => {
						if (err) {
							reject(new Error('mistake in get5RandomShortAnswerQuestions query'))
						}

						var result = JSON.parse(JSON.stringify(queryResult))

						for (var i = 0; i < result.length; i++) {
							// var options = []
							// var optionA = {}
							// optionA.id = 'A'
							// optionA.value = result[i].optionA
							// var optionB = {}
							// optionB.id = 'B'
							// optionB.value = result[i].optionB
							// var optionC = {}
							// optionC.id = 'C'
							// optionC.value = result[i].optionC
							// var optionD = {}
							// optionD.id = 'D'
							// optionD.value = result[i].optionD
							// options.push(optionA)
							// options.push(optionB)
							// options.push(optionC)
							// options.push(optionD)
							// result[i].options = options
							delete result[i].uploader
							delete result[i].type
							delete result[i].tag
							delete result[i].analysis

							delete result[i].optionA
							delete result[i].optionB
							delete result[i].optionC
							delete result[i].optionD
						}


						for (var i = 0; i < result.length; i++) {
							result[i].answer = result[i].answer.split('/!')
							for (var j = 0; j < result[i].answer.length; j++) {
								result[i].answer[j] = result[i].answer[j].split('%%')
							}
						}


						connection.release()
						resolve(result)
					})
				}).catch(() => { })
				resolve(promise)
			})
		}).catch(() => { })
	},
}
