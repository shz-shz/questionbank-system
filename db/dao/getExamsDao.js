const { query } = require('express')
const mysql = require('mysql')
const $single = require('../../conf/mysql_single')
const $sql = require('../sql/getExamSqlMapping')

const pool = mysql.createPool($single)

module.exports = {
    getAllExams: (req, res) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(new Error('mistake in getAllExams'))
                }
                const promise = new Promise((resolve, reject) => {
                    connection.query($sql.getAllExamsSelect, (err, queryResult) => {
                        if (err) {
                            reject(new Error('mistake in getAllExams query'))
                        }

                        var result = JSON.parse(JSON.stringify(queryResult))

                        connection.release()
                        resolve(result)
                    })
                }).catch(() => { })
                resolve(promise)
            })
        }).catch(() => { })
    },
    getExamById: (req, res) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(new Error('mistake in getExamById'))
                }
                const promise = new Promise((resolve, reject) => {
                    connection.query($sql.getExamById, req.query.id, (err, queryResult) => {
                        if (err) {
                            reject(new Error('mistake in getExamById query'))
                        }

                        var result = JSON.parse(JSON.stringify(queryResult))
                        connection.release()
                        resolve(result)
                    })
                }).catch(() => { })
                resolve(promise)
            })
        }).catch(() => { })
    }
}