const indexDao = require('../db/dao/indexDao')
const fs = require('fs')

exports.getIndex = (req, res) => {
	indexDao
		.indexSelect()
		.then((result) => result)
		.then((result) => {
			res.render('index.html', {
				questions: result,
			})
		})
}

// exports.getApiDoc = (req, res) => {
// 	fs.readFile('../public/apidoc/index.html', function (err, data) {
// 		if (err)
// 			return res.send(err)
// 		res.send(data)
// 	})
// }

