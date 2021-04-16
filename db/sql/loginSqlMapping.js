const loginSql = {
  registerInsert: 'INSERT INTO userpwd (email, password) VALUES(?,?)',
  selectUserPwd: 'SELECT password, id FROM userpwd WHERE email=?'
}

module.exports = loginSql