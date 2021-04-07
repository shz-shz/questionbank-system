const getQuestionSql = {
  getAllQuestionsSelect: 'SELECT * FROM questions',
  get10RandomQuestionsSelect: 'SELECT * FROM questions ORDER BY RAND() LIMIT 10',
}

module.exports = getQuestionSql