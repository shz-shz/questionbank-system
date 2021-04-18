const userInfoSql = {
	initUserInfo: 'INSERT INTO userinfo(id, email) VALUES(?,?);',
	addUserInfoUpdate: 'UPDATE userinfo SET name=?, sex=?, selfIntroduction=?, phone=?, qqNumber=?  WHERE id =?;',
}

module.exports = userInfoSql
