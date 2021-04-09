const express = require('express');
const router = express.Router();
const getQuestionsController = require('../../controller/getQuestionsController');

router.get('/get-all-questions', getQuestionsController.getAllQuestions)
router.get('/get-10-random-questions', getQuestionsController.get10RandomQuestions)

module.exports = router;