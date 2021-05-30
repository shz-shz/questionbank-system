const express = require('express')
const router = express.Router()
const indexController = require('../controller/indexController')
const addQuestionsController = require('../controller/addQuestionsController')
const examIndexController = require('../controller/examIndexController')
const addExamsController = require('../controller/addExamsController')

//router.get('/', indexController.getIndex)

router.get('/addquestion1', (req, res) => {
	res.render('../views/addquestion1.html')
})

router.get('/addquestion2', (req, res) => {
	res.render('../views/addquestion2.html')
})

router.get('/edit', addQuestionsController.showToBeEditedQuestion)

router.get('/delete', addQuestionsController.deleteQuestion)

router.get('/exam', examIndexController.getIndex)

router.get('/addexam', addExamsController.getIndex)

router.get('/editexam', addExamsController.showToBeEditedExam)

router.get('/deleteexam', addExamsController.deleteExam)

module.exports = router
