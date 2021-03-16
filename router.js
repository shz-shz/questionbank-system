var express = require('express')
var fs = require('fs')
var questions = require('./mongoose')
var mutipart = require('connect-multiparty');
var router = express.Router()
var mutipartMiddeware = mutipart();

router.get('/', function (req, res) {
    questions.find(function (err, data) {
        if (err) {
            return res.send('Error')
        }
        res.render('index.html', {
            questions: data
        })
    })
})

router.get('/addquestion1', function (req, res) {
    res.render('addquestion1.html')
})

router.post('/addquestion1', function (req, res) {
    new questions(req.body).save(function (err) {
        if (err) {
            return res.send('Error')
        }
        res.redirect('/')
    })
})

router.get('/edit', function (req, res) {
    questions.findById(req.query.id, function (err, question) {
        if (err) {
            return res.send('Error')
        }
        res.render('edit.html', { question: question })
    })
})

router.post('/edit', function (req, res) {
    questions.findByIdAndUpdate(req.body.id, req.body, function (err) {
        if (err) {
            return res.send('Error')
        }
        res.redirect('/')
    })
})

router.get('/addquestion2', function (req, res) {
    res.render('addquestion2.html')
});

router.post('/upload', mutipartMiddeware, function (req, res) {
    fs.readFile(req.files.myfile.path, function (err, data) {
        if (err)
            return res.send('Error')
        // var newdata = {}
        console.log(req.files.myfile)
        data = data.toString()
        var dataparse = data.split('\n')
        var json = { questions: [] }
        for (var i = 0; i < dataparse.length; i = i + 7) {
            var newdata = {}
            newdata.uploader = req.body.uploader
            newdata.tag = req.body.tag
            newdata.topic = dataparse[i]
            newdata.optionA = dataparse[i + 1].substr(2)
            newdata.optionB = dataparse[i + 2].substr(2)
            newdata.optionC = dataparse[i + 3].substr(2)
            newdata.optionD = dataparse[i + 4].substr(2)
            newdata.answer = dataparse[i + 5]
            newdata.analysis = dataparse[i + 6]
            json.questions.push(newdata)
        }
        for (var j = 0; j < json.questions.length; j++) {
            new questions(json.questions[j]).save(function (err) {
                if (err) {
                    return res.send('Error')
                }
            })
        }

    })
    res.redirect('/')
});

router.get('/delete', function (req, res) {
    questions.findByIdAndDelete(req.query.id, function (err) {
        if (err) {
            return res.send('Error')
        }
        res.redirect('/')
    })
})
module.exports = router