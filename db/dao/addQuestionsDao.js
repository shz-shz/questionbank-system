const mysql = require('mysql');
const $conf = require('../../conf/mysql')
const $sql = require('../sql/addQuestionSqlMapping');

const pool = mysql.createPool($conf);

module.exports = {
  addQuestions:(req,res) => {
    pool.getConnection((err, connection) => {
      const params = [req.body.uploader, req.body.type, req.body.question, req.body.tag, req.body.optionA, req.body.optionB, req.body.optionC, req.body.optionD, req.body.answer, req.body.analysis]
      connection.query($sql.manualUploadInsert, params, (err) => {
        if (err) {
          console.log(err);
        }
        console.log('added!')
        connection.release()
      })
    })
  },
  showToBeEditedQuestion: (req,res) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(new Error('mistake in showToBeEditedQuestion'))
        }
        let promise = new Promise((resolve, reject) => {
          connection.query($sql.editSelect,req.query.id, (err, queryResult) => {
            if (err) {
              reject(new Error('mistake in showToBeEditedQuestion query'))
            }
            connection.release()
            resolve(queryResult)
          })
        }).catch(() => { })
        resolve(promise)
      })
    }).catch(()=>{})
  },
  editQuestion: (req,res) => {
    pool.getConnection((err, connection) => {
      const params = [req.body.uploader, req.body.type, req.body.question, req.body.tag, req.body.optionA, req.body.optionB, req.body.optionC, req.body.optionD, req.body.answer, req.body.analysis, req.body.id]
      connection.query($sql.editUpdate, params, (err) => {
        if (err) {
          console.log(err);
        }
        console.log('updated!')
        connection.release()
      })
    })
  },
  addMultiQuestions: (req,res) => {
    /* to be completed */
  },
  deleteQuestion: (req,res) => {
    pool.getConnection((err, connection) => {
      const id = req.query.id
      connection.query($sql.deleteQuestion, id, (err) => {
        if (err) {
          console.log(err);
        }
        console.log('deleted!')
        connection.release()
      })
    })
  }
}