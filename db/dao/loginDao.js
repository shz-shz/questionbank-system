const mysql = require('mysql')
const { pwd_crypto, pwd_compare } = require('../../utils/crypto')
const $conf = require('../../conf/mysql')
const $sql = require('../sql/loginSqlMapping')
const pool = mysql.createPool($conf)

module.exports = {
  register: (req, res) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(new Error('mistake in register'))
        }
        let promise = new Promise((resolve, reject) => {
          const params = [req.body.email, pwd_crypto(req.body.password)]
          connection.query($sql.registerInsert, params, (err) => {
            if (err) {
              connection.release()
              resolve({
                status: 0,
                msg: 'Failed to register.'
              })
            } else {
              connection.release()
              resolve({
                status: 1,
                msg: 'Successfully Registered!'
            })
            }
            
          })
        }).catch(() => { })
        resolve(promise)
      })
    }).catch(() => { })
  },
}