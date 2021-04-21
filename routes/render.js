const express = require('express')
const router = express.Router()
const indexController = require('../controller/indexController')
const addQuestionsController = require('../controller/addQuestionsController')

//router.get('/', indexController.getIndex)

router.get('/addquestion1', (req, res) => {
	res.render('../views/addquestion1.html')
})

router.get('/addquestion2', (req, res) => {
	res.render('../views/addquestion2.html')
})

router.get('/edit', addQuestionsController.showToBeEditedQuestion)

router.get('/delete', addQuestionsController.deleteQuestion)

module.exports = router
