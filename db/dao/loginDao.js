const mysql = require('mysql')
const { pwd_crypto, pwd_compare } = require('../../utils/crypto')
const jwt = require('jsonwebtoken')
const $single = require('../../conf/mysql_single')
const $multi = require('../../conf/mysql_multi')
const $SECRET = require('../../conf/secret')
const $sql = require('../sql/loginSqlMapping')
const SECRET = require('../../conf/secret')
const pool = mysql.createPool($single)
const multiPool = mysql.createPool($multi)

module.exports = {
	register: (req, res) => {
		return new Promise((resolve, reject) => {
			multiPool.getConnection((err, connection) => {
				if (err) {
					reject(new Error('mistake in register'))
				}
				let promise = new Promise((resolve, reject) => {
					const params = [req.body.email, pwd_crypto(req.body.password)]
					connection.query($sql.registerInsert, params, (err, queryResult) => {
						if (err) {
							connection.release()
							resolve([
								{
									status: 0,
									msg: 'User Already Registered.',
								},
							])
						} else {
							connection.release()
							resolve([
								{
									status: 1,
									msg: 'Successfully Registered!',
								},
								{
									newId: queryResult[1][0].newId,
								},
							])
						}
					})
				}).catch(() => {})
				resolve(promise)
			})
		}).catch(() => {})
	},
	login: (req, res) => {
		return new Promise((resolve, reject) => {
			pool.getConnection((err, connection) => {
				if (err) {
					reject(new Error('mistake in login'))
				}
				let promise = new Promise((resolve, reject) => {
					const params = [req.body.email]
					const raw_pwd = req.body.password
					connection.query($sql.selectUserPwd, params, (err, queryResult) => {
						if (queryResult.length === 0) {
							connection.release()
							resolve([
								{
									status: 0,
									msg: 'Unregistered User.',
								},
							])
						} else {
							const crypto_pwd = queryResult[0].password
							if (pwd_compare(raw_pwd, crypto_pwd)) {
								const token = jwt.sign({ id: queryResult[0].id }, $SECRET, {
									expiresIn: '48',
									algorithm: 'HS256',
								})
								resolve([
									{
										status: 1,
										msg: 'Successfully Login!',
										token: token,
									},
								])
							} else {
								resolve([
									{
										status: 0,
										msg: 'Email Or Password Incorrect!',
									},
								])
							}
							connection.release()
						}
					})
				}).catch(() => {})
				resolve(promise)
			})
		}).catch(() => {})
	},
}
