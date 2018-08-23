import {receiveUsers, getUsers} from '../../client/actions/users'
import nock from 'nock'

test('Receive users action creator', () => {
  const fakeUsers = [
    'ThingOne',
    'ThingTwo',
    'Sally',
    'Dr Seuss',
    'Horton'
  ]

  const expected = {
    type: 'RECEIVE_USERS',
    users: fakeUsers
  }

  const actual = receiveUsers(fakeUsers)

  expect(actual.users.length).toBe(5)
  expect(actual.users[2]).toBe('Sally')
  expect(actual.users[4]).toBe('Horton')
  expect(actual).toEqual(expected)
})

test('getUsers will dispatch an action on success', () => {
  const fakeUsers = [
    'ThingOne',
    'ThingTwo',
    'Dr Seuss',
    'Horton',
    'Grinch'
  ]
  const scope = nock('http://localhost:80')
  .get('/api/users')
  .reply(200, fakeUsers);

  const expectedAction = {
    type: 'RECEIVE_USERS',
    users: fakeUsers
  }
  const dispatch = jest.fn()
  .mockImplementationOnce(action => {
    expect(action).toEqual(expectedAction)
    scope.done()
  })
  getUsers()(dispatch)
})
