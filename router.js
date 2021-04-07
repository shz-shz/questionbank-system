var express = require('express')
var fs = require('fs')
var path = require('path')
var connection = require(path.join(__dirname, './my_sql'))
var mutipart = require('connect-multiparty');
var router = express.Router()
var mutipartMiddeware = mutipart();
var connect = null;

router.get('/', function (req, res) {
    connect = connection.createConnection()
    connect.connect()
    connect.query('SELECT * FROM questions', function (err, data) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        var newdata = []
        for (var i = 0; i < data.length; i++) {
            var addobject = {}
            addobject.id = data[i].id
            addobject.uploader = data[i].uploader
            addobject.question = data[i].question
            addobject.tag = data[i].tag
            addobject.answer = data[i].answer
            addobject.analysis = data[i].analysis
            addobject.optionA = data[i].optionA
            addobject.optionB = data[i].optionB
            addobject.optionC = data[i].optionC
            addobject.optionD = data[i].optionD
            newdata.push(addobject)
        }
        console.log(newdata)
        res.render('index.html', {
            questions: newdata
        })
        connect.end()
    })
})

router.get('/addquestion1', function (req, res) {
    res.render('addquestion1.html')
})

router.post('/addquestion1', function (req, res) {
    var addSql = "INSERT INTO questions(uploader,type,question,tag,optionA,optionB,optionC,optionD,answer,analysis) VALUES(?,?,?,?,?,?,?,?,?,?)"
    var addSqlParams = []
    addSqlParams.push(req.body.uploader)
    addSqlParams.push(req.body.type)
    addSqlParams.push(req.body.question)
    addSqlParams.push(req.body.tag)
    addSqlParams.push(req.body.optionA)
    addSqlParams.push(req.body.optionB)
    addSqlParams.push(req.body.optionC)
    addSqlParams.push(req.body.optionD)
    addSqlParams.push(req.body.answer)
    addSqlParams.push(req.body.analysis)
    connect = connection.createConnection()
    connect.connect()
    connect.query(addSql, addSqlParams, function (err, data) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }

    })
    res.redirect('/')
    connect.end()
})

router.get('/edit', function (req, res) {
    var sql = 'SELECT * FROM questions WHERE id=' + req.query.id
    connect = connection.createConnection()
    connect.connect()
    connect.query(sql, function (err, data) {
        if (err) {
            return res.send(err.message)
        }
        res.render('edit.html', { question: data[0] })
        connect.end()
    })
})

router.post('/edit', function (req, res) {
    var editSql = 'UPDATE questions SET uploader = ?,type = ?,question = ?,tag = ?,optionA = ?,optionB = ?,optionC = ?,optionD = ?,answer = ?,analysis = ? WHERE id = ?'
    var editSqlParams = []
    editSqlParams.push(req.body.uploader)
    editSqlParams.push(req.body.type)
    editSqlParams.push(req.body.question)
    editSqlParams.push(req.body.tag)
    editSqlParams.push(req.body.optionA)
    editSqlParams.push(req.body.optionB)
    editSqlParams.push(req.body.optionC)
    editSqlParams.push(req.body.optionD)
    editSqlParams.push(req.body.answer)
    editSqlParams.push(req.body.analysis)
    editSqlParams.push(req.body.id)
    connect = connection.createConnection()
    connect.connect()
    connect.query(editSql, editSqlParams, function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }
        res.redirect('/')
        connect.end()
    })
})

router.get('/addquestion2', function (req, res) {
    res.render('addquestion2.html')
});

router.post('/upload', mutipartMiddeware, function (req, res) {
    fs.readFile(req.files.myfile.path, function (err, data) {
        if (err)
            return res.send(err)
        data = data.toString()
        var dataparse = data.split('\n')
        var json = { questions: [] }
        for (var i = 0; i < dataparse.length; i = i + 7) {
            var newdata = {}
            newdata.uploader = req.body.uploader
            newdata.tag = req.body.tag
            newdata.type = req.body.type
            newdata.question = dataparse[i]
            newdata.optionA = dataparse[i + 1].substr(2)
            newdata.optionB = dataparse[i + 2].substr(2)
            newdata.optionC = dataparse[i + 3].substr(2)
            newdata.optionD = dataparse[i + 4].substr(2)
            newdata.answer = dataparse[i + 5].replace(/[\r\n]/g, "");
            newdata.analysis = dataparse[i + 6]
            json.questions.push(newdata)
        }
        var addSql = "INSERT INTO questions(uploader,type,question,tag,optionA,optionB,optionC,optionD,answer,analysis) VALUES(?,?,?,?,?,?,?,?,?,?)"
        connect = connection.createConnection()
        connect.connect()
        for (var j = 0; j < json.questions.length; j++) {
            var addSubArray = []
            addSubArray.push(json.questions[j].uploader)
            addSubArray.push(json.questions[j].type)
            addSubArray.push(json.questions[j].question)
            addSubArray.push(json.questions[j].tag)
            addSubArray.push(json.questions[j].optionA)
            addSubArray.push(json.questions[j].optionB)
            addSubArray.push(json.questions[j].optionC)
            addSubArray.push(json.questions[j].optionD)
            addSubArray.push(json.questions[j].answer)
            addSubArray.push(json.questions[j].analysis)
            connect.query(addSql, addSubArray, function (err, data) {
                if (err) {
                    console.log('[INSERT ERROR] - ', err.message);
                    return;
                }
            })
        }
        connect.end()
    })
    res.redirect('/')
});

router.get('/delete', function (req, res) {
    var deleteSql = 'DELETE FROM questions WHERE id=' + req.query.id
    connect = connection.createConnection()
    connect.connect()
    connect.query(deleteSql, function (err, result) {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            return;
        }
        res.redirect('/')
        connect.end()
    })
})

router.get('/get_all_questions', function (req, res) {
    connect = connection.createConnection()
    connect.connect()
    connect.query('SELECT * FROM questions', function (err, data) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        var newdata = []
        for (var i = 0; i < data.length; i++) {
            var addobject = {}
            addobject.id = data[i].id
            addobject.type = data[i].type
            addobject.question = data[i].question
            addobject.options = [{ id: 'A', value: data[i].optionA },
            { id: 'B', value: data[i].optionB },
            { id: 'C', value: data[i].optionC },
            { id: 'D', value: data[i].optionD }]
            addobject.answer = data[i].answer

            newdata.push(JSON.parse(JSON.stringify(addobject)))
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        res.send(newdata)
        connect.end()
    })
})

router.get('/get_random_10questions', function (req, res) {
    connect = connection.createConnection()
    connect.connect()
    var random_sql = 'SELECT * FROM questions ORDER BY RAND() LIMIT 10'
    connect.query(random_sql, function (err, data) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        var newdata = []
        for (var i = 0; i < data.length; i++) {
            var addobject = {}
            addobject.id = data[i].id
            addobject.type = data[i].type
            addobject.question = data[i].question
            addobject.options = [{ id: 'A', value: data[i].optionA },
            { id: 'B', value: data[i].optionB },
            { id: 'C', value: data[i].optionC },
            { id: 'D', value: data[i].optionD }]
            addobject.answer = data[i].answer

            newdata.push(JSON.parse(JSON.stringify(addobject)))
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        res.send(newdata)
        connect.end()
    })
})

module.exports = router