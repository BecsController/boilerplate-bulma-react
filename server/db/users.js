const conn = require('./connection')

function getUsers(testDb) {
  const db = testDb || conn
  return db('users')
}

module.exports = {
  getUsers
}
