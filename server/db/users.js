const conn = require('./connection')

function getUsers() {
  return conn('users')
}

module.exports = {
  getUsers
}
