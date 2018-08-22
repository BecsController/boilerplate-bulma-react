import React from 'react'

import {connect} from 'react-redux'

function Users (props) {
console.log(props)
  return <div>
    {props.users.map(user => <div>
      <h1>{user.name}</h1>
    </div>)}
  </div>
}

const mapStateToProps = ({users}) => ({
  users
})

export default connect(mapStateToProps)(Users)
