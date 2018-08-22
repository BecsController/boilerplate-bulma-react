import React from 'react'
import {render} from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <h1>'hi im working'</h1>,
    // <Provider store={store}>
      // <App />
    // </Provider>,
    document.getElementById('app')
  )
})
