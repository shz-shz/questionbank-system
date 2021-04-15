const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10)

function pwd_crypto(raw) {
  const hash = bcrypt.hashSync(raw, salt)
  return hash
}

function pwd_compare(raw, hash) {
  return bcrypt.compareSync(raw, hash)
}

module.exports = {
  pwd_crypto: pwd_crypto,
  pwd_compare: pwd_compare
}