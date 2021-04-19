const mysql = require('mysql')
const $conf = require('../../conf/mysql_single')
const $sql = require('../sql/userInfoSqlMapping')
const pool = mysql.createPool($conf)

module.exports = {
	initUserInfo: (newId, req, res) => {
		return new Promise((resolve, reject) => {
			pool.getConnection((err, connection) => {
				if (err) {
					reject(new Error('mistake in initUserInfo'))
				}
				let promise = new Promise((resolve, reject) => {
					const params = [newId, req.body.email]
					connection.query($sql.initUserInfo, params, (err) => {
						if (err) {
							connection.release()
							resolve({
								status: 0,
								msg: 'InitUserInfo Error.',
							})
						} else {
							connection.release()
							resolve({
								status: 1,
								msg: 'Successfully InitUserInfo',
							})
						}
					})
				}).catch(() => {})
				resolve(promise)
			})
		})
	},
}
