import request from 'superagent'

export const receiveUsers = (users) => {
  return {
    type: 'RECEIVE_USERS',
    users
  }
}

export function getUsers() {
  return dispatch => {
    request
      .get('/api/users')
      .then(res => {
        dispatch(receiveUsers(res.body))
    })
  }
}
