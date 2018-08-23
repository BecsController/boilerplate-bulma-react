import React from 'react'

import {connect} from 'react-redux'

import {getUsers} from '../actions/users'

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

componentDidMount() {
  this.props.dispatch(getUsers())
}

  render() {
  console.log(this.state.users)
    return (
      <div>
        {this.state.users.map(user => <div>
          <h1>{user.name}</h1>
        </div>)}
      </div>
    )
  }
}

const mapStateToProps = users => ({
  users
})

export default connect(mapStateToProps)(Users)
