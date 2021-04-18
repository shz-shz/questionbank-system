const loginSql = {
	registerInsert: 'INSERT INTO userpwd (email, password) VALUES(?,?);SELECT LAST_INSERT_ID() AS newId;',
	selectUserPwd: 'SELECT password, id FROM userpwd WHERE email=?',
}

module.exports = loginSql
