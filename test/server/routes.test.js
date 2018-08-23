const request = require('supertest')

jest.mock('../../server/db/users', () => ({
  getUsers: () => Promise.resolve([
    {id: 1, name: 'ThingOne'},
    {id: 2, name: 'ThingTwo'}
  ]),
}))

const server = require('../../server/server')

test('GET /users returns mocked users', () => {
  return request(server)
    .get('/api/users')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
      expect(res.body[0]).toHaveProperty("name")
      expect(res.body[1].name).toBe("ThingTwo")
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
