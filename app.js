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
app.engine('html', require('express-art-template'))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use(mutipart({ uploadDir: path.join(__dirname, './public/files') }))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
app.use('/public/', express.static(path.join(__dirname, './public/')))

app.use('/', indexRouter)
// app.use('/add-questions', addQuestionsRouter)
app.use('/api', APIRouter)
app.use('/render', renderRouter)





// app.use(router)




app.listen(80, function () {
    console.log('Running...')
})