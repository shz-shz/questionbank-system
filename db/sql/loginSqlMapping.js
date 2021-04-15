const loginSql = {
  registerInsert: 'INSERT INTO userpwd (email, password) VALUES(?,?)',
  selectUserPwd: 'SELECT password FROM userpwd WHERE email=?'
}

module.exports = loginSql