const express = require('express')
const router = express.Router()
const addExamsController = require('../controller/addExamsController')

router.post('/manually', addExamsController.addExamManually)
router.post('/edit', addExamsController.editExam)

module.exports = router