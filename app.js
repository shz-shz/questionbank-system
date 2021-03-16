var express = require('express')
var router = require('./router')
var bodyparser = require('body-parser')
var mutipart = require('connect-multiparty');

var app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use(mutipart({ uploadDir: './public/files' }));

app.engine('html', require('express-art-template'))

app.use(router)

app.listen(80, function() {
    console.log('Running...')
})