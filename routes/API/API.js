const express = require('express');
const router = express.Router();
const getQuestionsController = require('../../controller/getQuestionsController');
const loginController = require('../../controller/loginController')


//获取题目
router.get('/get-all-questions', getQuestionsController.getAllQuestions)
router.get('/get-10-random-questions', getQuestionsController.get10RandomQuestions)

//注册、登录
router.post('/register', loginController.register)
router.post('/login', loginController.login)

module.exports = router;