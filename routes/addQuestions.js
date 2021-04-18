const express = require('express')
const router = express.Router()
const addQuestionsController = require('../controller/addQuestionsController')

router.post('/manually', addQuestionsController.addQuestionManually)
router.post('/multi', addQuestionsController.addMultiQuestions)
router.get('/edit', addQuestionsController.showToBeEditedQuestion)
router.post('/edit', addQuestionsController.editQuestion)
router.get('/delete', addQuestionsController.deleteQuestion)

module.exports = router
