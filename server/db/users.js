const conn = require('./connection')
const hash = require('../auth/hash')

function getUsers(testDb) {
  const db = testDb || conn
  return db('users').select()
}

function getAuthUsers(testDb) {
  const db = testDb || conn
  return db('userAuth').select()
}

function createUser(newUser, testDb) {
  return new Promise(function(resolve, reject) {
    const db = testDb || conn
    const {name, password} = newUser

    hash.generate(password, (err, hash) => {
      let authInfo = {
        password: hash,
        name,
      }

      delete newUser.password
      return db('users')
      .insert(newUser)
      .then((id) => {
        return db('userAuth')
        .insert(authInfo)
        .then(() => getUser(id[0]))
        .then(user => resolve(user))
      })
    })
  });
}

function userExists (name, testDb) {
  const db = testDb || conn
  return db('users')
    .where('name', name)
    .first()
}

module.exports = {
  getUsers,
  getAuthUsers,
  createUser,
  userExists
}
