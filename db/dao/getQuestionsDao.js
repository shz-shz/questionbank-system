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
						const result = JSON.parse(JSON.stringify(queryResult))
						connection.release()
						resolve(result)
					})
				}).catch(() => {})
				resolve(promise)
			})
		}).catch(() => {})
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
						const result = JSON.parse(JSON.stringify(queryResult))
						connection.release()
						resolve(result)
					})
				}).catch(() => {})
				resolve(promise)
			})
		}).catch(() => {})
	},
}
