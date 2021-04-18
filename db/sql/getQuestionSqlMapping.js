const getQuestionSql = {
	getAllQuestionsSelect: 'SELECT * FROM questions',
	get10RandomQuestionsSelect: 'SELECT * FROM questions ORDER BY RAND() LIMIT 10',
	get10RandomMultipleChoiceQuestionsSelect: "SELECT * FROM questions WHERE type='单选' ORDER BY RAND() LIMIT 10",
	get5RandomShortAnswerQuestionsSelect: "SELECT * FROM questions WHERE type='简答' ORDER BY RAND() LIMIT 5",
}

module.exports = getQuestionSql
