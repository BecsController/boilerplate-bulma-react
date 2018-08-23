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
        <h1>{this.state.users[0].name}</h1>
        <h2>{this.state.users[1].name}</h2>
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
