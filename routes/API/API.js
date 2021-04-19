const express = require('express');
const router = express.Router();
const getQuestionsController = require('../../controller/getQuestionsController');

router.get('/get-all-questions', getQuestionsController.getAllQuestions)
router.get('/get-10-random-questions', getQuestionsController.get10RandomQuestions)
router.get('/get-10-random-multiple-choice-questions', getQuestionsController.get10RandomMultipleChoiceQuestions)
router.get('/get-5-random-short-answer-questions', getQuestionsController.get5RandomShortAnswerQuestions)

module.exports = router;