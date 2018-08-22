import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/App'

import {createStore} from 'redux'
import reducers from './reducers/index'

const store = createStore(reducers)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
