const addQuestionsDao = require('../db/dao/addQuestionsDao')

//添加题目
exports.addQuestionManually = (req, res) => {
  addQuestionsDao.addQuestions(req)
}

//显示待修改的题目信息
exports.showToBeEditedQuestion = (req,res) => {
  addQuestionsDao.showToBeEditedQuestion(req)
    .then((result) => result)
    .then((result) => {
    res.send(result)
  })
}

//编辑更新题目信息
exports.editQuestion = (req,res) => {
  addQuestionsDao.editQuestion(req)
}

//批量添加题目
exports.addMultiQuestions = (req,res) => {
  
}

//删除题目
exports.deleteQuestion = (req,res) => {
  addQuestionsDao.deleteQuestion(req)
}