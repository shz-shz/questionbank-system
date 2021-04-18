const addQuestionSql = {
	manualUploadInsert: 'INSERT INTO questions(uploader,type,question,tag,optionA,optionB,optionC,optionD,answer,analysis) VALUES(?,?,?,?,?,?,?,?,?,?)',
	editSelect: 'SELECT * FROM questions WHERE id=?',
	editUpdate: 'UPDATE questions SET uploader = ?,type = ?,question = ?,tag = ?,optionA = ?,optionB = ?,optionC = ?,optionD = ?,answer = ?,analysis = ? WHERE id = ?',
	multiUploadInsert: 'INSERT INTO questions(uploader,type,question,tag,optionA,optionB,optionC,optionD,answer,analysis) VALUES(?,?,?,?,?,?,?,?,?,?)',
	deleteQuestion: 'DELETE FROM questions WHERE id=?',
}

module.exports = addQuestionSql
