var express = require('express')
var router = require('./router')
var bodyparser = require('body-parser')
var mutipart = require('connect-multiparty')
var path = require('path')
var cors = require('cors');

var app = express()

app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
app.use('/public/', express.static(path.join(__dirname, './public/')))

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use(mutipart({ uploadDir: path.join(__dirname, './public/files') }));

app.engine('html', require('express-art-template'))

app.use(router)

app.use(cors());

app.listen(80, function () {
    console.log('Running...')
})