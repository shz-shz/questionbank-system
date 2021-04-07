const express = require('express');
const router = express.Router();
const addQuestionsController = require('../controller/addQuestionsController');

router.get('/', addQuestionsController.addQuestionManually)
router.get('/edit', addQuestionsController.showToBeEditedQuestion)
router.post('/edit', addQuestionsController.editQuestion)

module.exports = router;