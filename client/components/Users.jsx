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

componentWillReceiveProps (nextProps) {
  this.setState({
    users: nextProps.users
  })
}

  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.users && users.map(user => (
          <div>
            <h1>{user.name}</h1>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = users => {
  return {
    users
  }
}

export default connect(mapStateToProps)(Users)
