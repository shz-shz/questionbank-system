const mysql = require('mysql')
const $single = require('../../conf/mysql_single')
const $sql = require('../sql/indexSqlMapping')

const pool = mysql.createPool($single)

module.exports = {
	indexSelect() {
		return new Promise((resolve, reject) => {
			pool.getConnection((err, connection) => {
				if (err) {
					reject(new Error('mistake in indexSelect'))
				}
				let promise = new Promise((resolve, reject) => {
					connection.query($sql.selectAll, (err, queryResult) => {
						if (err) {
							reject(new Error('mistake in indexSelect query'))
						}
						connection.release()
						resolve(queryResult)
					})
				}).catch(() => { })
				resolve(promise)
			})
		}).catch(() => { })
	},
}
