const request = require('supertest')

const env = require('./test-environment')
const Db = require('../../server/db/users')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// Tests

test('grab users from db works', () => {
  return Db.getUsers(testDb)
    .then(users => {
      expect(users.length).toBe(2)
      expect(users[0].hasOwnProperty('name')).toBeTruthy()
      expect(users[1].email).toBe('testing@test.com')
    })
})
