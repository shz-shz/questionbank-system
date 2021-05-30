const getExamsDao = require('../db/dao/getExamsDao')

exports.getAllExams = (req, res) => {
    getExamsDao
        .getAllExams()
        .then((result) => result)
        .then((result) => {
            res.send(result)
        })
}

exports.getExamById = (req, res) => {
    getExamsDao
        .getExamById(req, res)
        .then((result) => result)
        .then((result) => {
            res.send(result)
        })
}