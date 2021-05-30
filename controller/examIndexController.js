const examIndexDao = require('../db/dao/examIndexDao')

exports.getIndex = (req, res) => {
    examIndexDao
        .examSelect()
        .then((result) => result)
        .then((result) => {
            res.render('exam.html', {
                exams: result,
            })
        })
}