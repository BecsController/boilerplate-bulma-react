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
    return (
      <div>
        <h1>{this.state.users[0].name}</h1>
        <h2>{this.state.users[1].name}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)
