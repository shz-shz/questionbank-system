const express = require('express')
const router = require('./router')
const bodyparser = require('body-parser')
const mutipart = require('connect-multiparty')
const path = require('path')
const cors = require('cors')
const indexRouter = require('./routes/index')
const addQuestionsRouter = require('./routes/addQuestions')
const APIRouter = require('./routes/API/API')
const renderRouter = require('./routes/render')
const accountRouter = require('./routes/account')
const { jwtInterceptor } = require('./middlewares/jwtInterceptor')
const app = express()

app.use(cors())
app.engine('html', require('express-art-template')) //配置express中的art-template模板
app.set('views', path.join(__dirname, 'views')) //设置渲染目录
app.use(bodyparser.urlencoded({ extended: false })) //配置获取POST请求体的body包
app.use(bodyparser.json())

app.use(mutipart({ uploadDir: path.join(__dirname, './public/files') })) //配置获取上传文件的中间件

app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/'))) //开放模块目录
app.use('/public/', express.static(path.join(__dirname, './public/'))) //开放公共资源

//使用jwtInterceptor中间件拦截全局请求，对特定路由的请求需要验证token
// app.use(jwtInterceptor)
//处理token核验不通过的请求
// app.use(jwtErrHandler)
// app.use('/', jwtInterceptor, jwtErrHandler, indexRouter)
app.use('/', indexRouter)
app.use('/account', accountRouter)
app.use('/api', jwtInterceptor, APIRouter)
app.use('/render', renderRouter)
app.use('/add-questions', addQuestionsRouter)
// app.use(router)

app.listen(80, function () {
	console.log('Running...')
})
