import React from 'react'

import {connect} from 'react-redux'

import {getUsers} from '../actions/users'

class Users extends React.Component {

componentDidMount() {
  this.props.dispatch(getUsers())
}

  render() {
  console.log(props.users)
    return (
      <div>
        {this.state.users.map(user => <div>
          <h1>{user.name}</h1>
        </div>)}
      </div>
    )
  }
}

const mapStateToProps = ({users}) => ({
  users
})

export default connect(mapStateToProps)(Users)
