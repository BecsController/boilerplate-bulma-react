import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Users from './Users'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome</h1>
        <Route path='/users' component={Users}/>
      </div>
    </Router>
  )
}

export default App
