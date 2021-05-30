const mysql = require('mysql')
const $single = require('../../conf/mysql_single')
const $sql = require('../sql/addExamsSqlMapping')
const pool = mysql.createPool($single)

function secondsToTime(value) {
    var theTime = parseInt(value);// 秒
    var middle = 0;// 分
    var hour = 0;// 小时

    if (theTime > 60) {
        middle = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (middle > 60) {
            hour = parseInt(middle / 60);
            middle = parseInt(middle % 60);
        }
    }
    var result = "" + parseInt(theTime);
    result = "" + parseInt(middle) + ":" + result;
    result = "" + parseInt(hour) + ":" + result;
    return result;
}

module.exports = {
    addExams: (req, res) => {
        req.body.starttime = req.body.starttime_year + '-' + req.body.starttime_month + '-' + req.body.starttime_date + 'T' + req.body.starttime_hour + ':' + req.body.starttime_minute + ':' + req.body.starttime_second
        req.body.duration = parseInt(req.body.duration_hour * 3600 + req.body.duration_month * 60 + req.body.duration_second)
        var newquestions = ''
        for (var i = 0; i < req.body.questions.length; i++) {
            if (i < req.body.questions.length - 1)
                newquestions = newquestions + req.body.questions[i] + '??'
            else
                newquestions = newquestions + req.body.questions[i]
        }
        req.body.questions = newquestions
        pool.getConnection((err, connection) => {
            const params = [req.body.creator, req.body.duration, req.body.questions, req.body.topic, req.body.starttime]
            connection.query($sql.manualUploadInsert, params, (err) => {
                if (err) {
                    console.log(err);
                }
                console.log('added!')
                connection.release()
            })
        })
    },
    /*showToBeEditedExam: (req, res) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(new Error('mistake in showToBeEditedExam'))
                }
                let promise = new Promise((resolve, reject) => {
                    connection.query($sql.editSelect, req.query.id, (err, queryResult) => {
                        if (err) {
                            reject(new Error('mistake in showToBeEditedExam query'))
                        }
                        connection.release()
                        var result = JSON.parse(JSON.stringify(queryResult))
                        var date = result[0].starttime.split('T')[0]
                        var time = result[0].starttime.split('T')[1]
                        result[0].starttime_year = date.split('-')[0]
                        result[0].starttime_month = date.split('-')[1]
                        result[0].starttime_date = date.split('-')[2]
                        result[0].starttime_hour = time.split(':')[0]
                        result[0].starttime_minute = time.split(':')[1]
                        result[0].starttime_second = time.split(':')[2]

                        var durationTime = secondsToTime(result[0].duration)
                        result[0].duration_hour = durationTime.split(':')[0]
                        result[0].duration_minute = durationTime.split(':')[1]
                        result[0].duration_second = durationTime.split(':')[2]
                        delete result[0].duration
                        delete result[0].starttime
                        
                        resolve(result)
                    })
                }).catch(() => { })
                resolve(promise)
            })
        }).catch(() => { })
    },*/
    editExam: (req, res) => {
        req.body.starttime = req.body.starttime_year + '-' + req.body.starttime_month + '-' + req.body.starttime_date + 'T' + req.body.starttime_hour + ':' + req.body.starttime_minute + ':' + req.body.starttime_second
        req.body.duration = parseInt(req.body.duration_hour * 3600 + req.body.duration_month * 60 + req.body.duration_second)
        var newquestions = ''
        for (var i = 0; i < req.body.questions.length; i++) {
            if (i < req.body.questions.length - 1)
                newquestions = newquestions + req.body.questions[i] + '??'
            else
                newquestions = newquestions + req.body.questions[i]
        }
        req.body.questions = newquestions
        pool.getConnection((err, connection) => {
            const params = [req.body.creator, req.body.duration, req.body.questions, req.body.topic, req.body.starttime, req.body.id]
            connection.query($sql.editUpdate, params, (err) => {
                if (err) {
                    console.log(err);
                }
                console.log('updated!')
                connection.release()
            })
        })
    },
    deleteExam: (req, res) => {
        pool.getConnection((err, connection) => {
            const id = req.query.id
            connection.query($sql.deleteExam, id, (err) => {
                if (err) {
                    console.log(err)
                }
                console.log('deleted!')
                connection.release()
            })
        })
    }
}