const mysql = require("mysql");

function createConnection() {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "20010113shz",
        database: "questionbank"
    })
    return connection
}
// connection.query('CREATE TABLE t_questionbank(uploader varchar(255), type varchar(50), question varchar(255), tag int, optionA varchar(255), optionB varchar(255), optionC varchar(255), optionD varchar(255), answer varchar(255), analysis varchar(255))', function (err) {
//     console.log(err)
// })

module.exports.createConnection = createConnection
