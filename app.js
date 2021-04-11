var express = require('express')
var router = require('./router')
var bodyparser = require('body-parser')
var mutipart = require('connect-multiparty')
var path = require('path')
var cors = require('cors');
const indexRouter = require('./routes/index')
const addQuestionsRouter = require('./routes/addQuestions')
const APIRouter = require('./routes/API/API')
const renderRouter = require('./routes/render')
var app = express()

app.use(cors());
app.engine('html', require('express-art-template')) //配置express中的art-template模板
app.set('views', path.join(__dirname, 'views')); //设置渲染目录
app.use(bodyparser.urlencoded({ extended: false })) //配置获取POST请求体的body包
app.use(bodyparser.json())

app.use(mutipart({ uploadDir: path.join(__dirname, './public/files') })) //配置获取上传文件的中间件

app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/'))) //开放模块目录
app.use('/public/', express.static(path.join(__dirname, './public/'))) //开放公共资源

app.use('/', indexRouter)
app.use('/add-questions', addQuestionsRouter)
app.use('/api', APIRouter)
app.use('/render', renderRouter)



app.listen(80, function () {
    console.log('Running...')
})