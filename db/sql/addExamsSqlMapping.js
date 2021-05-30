const addExamSql = {
    manualUploadInsert: 'INSERT INTO exams(creator,duration,questions,topic,starttime) VALUES(?,?,?,?,?)',
    editSelect: 'SELECT * FROM exams WHERE id=?',
    editUpdate: 'UPDATE exams SET creator = ?,duration = ?,questions = ?,topic = ?,starttime = ? WHERE id = ?',
    deleteExam: 'DELETE FROM exams WHERE id=?'
}

module.exports = addExamSql