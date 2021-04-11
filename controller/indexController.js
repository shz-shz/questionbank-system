const indexDao = require('../db/dao/indexDao')

exports.getIndex = (req, res) => {
  indexDao.indexSelect()
    .then((result) => result)
    .then((result) => {
      res.render('index.html', {
        questions: result
      })
    })
}
