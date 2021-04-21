const express = require('express')
const router = express.Router()
const addQuestionsController = require('../controller/addQuestionsController')

router.post('/manually', addQuestionsController.addQuestionManually)
router.post('/multi', addQuestionsController.addMultiQuestions)
router.post('/edit', addQuestionsController.editQuestion)


module.exports = router
