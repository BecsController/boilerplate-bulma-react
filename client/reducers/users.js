
export default function (state = [], action) {
  console.log(action)
  switch(action.type) {
    case 'RECEIVE_USERS':
      return action.users
  default:
    return state
  }
}
