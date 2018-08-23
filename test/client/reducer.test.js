import usersReducer from '../../client/reducers/users'

test('Reducer Initial State', () => {
  const expected = []

  const actual = usersReducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('RECEIVE_USERS', () => {
  const fakeUsers = [
    'ThingOne',
    'ThingTwo',
    'Dr Seuss'
  ]
  const expected = [...fakeUsers]

  const action = {
    type: 'RECEIVE_USERS',
    users: fakeUsers
  }

  const actual = usersReducer(undefined, action)

  expect(actual.length).toEqual(3)
  expect(actual[0]).toBe('ThingOne')
  expect(actual).toEqual(expected)
})
