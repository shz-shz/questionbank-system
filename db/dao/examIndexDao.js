const mysql = require('mysql')
const $single = require('../../conf/mysql_single')
const $sql = require('../sql/examIndexSqlMapping')

const pool = mysql.createPool($single)

module.exports = {
    examSelect() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(new Error('mistake in indexSelect'))
                }
                let promise = new Promise((resolve, reject) => {
                    connection.query($sql.selectAll, (err, queryResult) => {
                        if (err) {
                            reject(new Error('mistake in examIndexSelect query'))
                        }

                        var result = JSON.parse(JSON.stringify(queryResult))

                        for (var i = 0; i < result.length; i++) {
                            var newtime = result[i].starttime.split('T')[0].split('-')[0] + '-' + result[i].starttime.split('T')[0].split('-')[1] + '-' + result[i].starttime.split('T')[0].split('-')[2] + ' ' + result[i].starttime.split('T')[1].split(':')[0] + ':' + result[i].starttime.split('T')[1].split(':')[1] + ':' + result[i].starttime.split('T')[1].split(':')[2]
                            result[i].starttime = newtime.toString()
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