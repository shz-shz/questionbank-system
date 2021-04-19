const express = require('express')
const router = express.Router()
const loginController = require('../controller/loginController')

//注册、登录
router.post('/register', loginController.register)
router.post('/login', loginController.login)

module.exports = router
