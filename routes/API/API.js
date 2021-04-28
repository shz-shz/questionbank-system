const express = require('express')
const router = express.Router()
const getQuestionsController = require('../../controller/getQuestionsController')
const loginController = require('../../controller/loginController')

//获取题目
router.get('/get-all-questions', getQuestionsController.getAllQuestions)
router.get('/get-10-random-questions', getQuestionsController.get10RandomQuestions)
router.get('/get-10-random-single-choice-questions', getQuestionsController.get10RandomSingleChoiceQuestions)
router.get('/get-5-random-short-answer-questions', getQuestionsController.get5RandomShortAnswerQuestions)
router.get('/get-5-random-fill-blank-questions', getQuestionsController.get5RandomFillBlankQuestions)

module.exports = router
