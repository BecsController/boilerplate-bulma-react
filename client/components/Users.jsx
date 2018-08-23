import React from 'react'
import {connect} from 'react-redux'

import {getUsers} from '../actions/users'

class Users extends React.Component {

componentWillMount() {
  this.props.dispatch(getUsers())
}

  render() {
    return (
      <div>
        <h2>User Page</h2>
        {this.props.users.map(user => <div key={user.name}>
            <h1>{user.name}</h1>
          </div>)}
      </div>
    )
  }
}

const mapStateToProps = users => users

export default connect(mapStateToProps)(Users)
