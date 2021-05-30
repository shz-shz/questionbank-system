const addExamsDao = require('../db/dao/addExamsDao')
const indexDao = require('../db/dao/indexDao')

exports.getIndex = (req, res) => {
    indexDao
        .indexSelect()
        .then((result) => result)
        .then((result) => {
            res.render('addexam.html', {
                questions: result,
            })
        })
}

exports.addExamManually = (req, res) => {
    addExamsDao.addExams(req)
    res.redirect('/render/exam')
}

exports.editExam = (req, res) => {
    addExamsDao.editExam(req)
    res.redirect('/render/exam')
}

exports.showToBeEditedExam = (req, res) => {
    indexDao
        .indexSelect()
        .then((result) => result)
        .then((result) => {
            res.render('editexam.html', {
                questions: result,
            })
        })
}

exports.deleteExam = (req, res) => {
    addExamsDao.deleteExam(req)
    res.redirect('/render/exam')
}