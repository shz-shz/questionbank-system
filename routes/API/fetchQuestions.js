const express = require('express');
const router = express.Router();
const getQuestionsController = require('../../controller/getQuestionsController');

router.get('/all-questions', getQuestionsController.getAllQuestions)
router.get('/10-random-questions', getQuestionsController.get10RandomQuestions)

module.exports = router;