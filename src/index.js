import './components/_settings/base.scss'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import Main from './components/pages/main'
import React from 'react'
import initStore from './state/store'

// Since we are using HtmlWebpackPlugin WITHOUT a template,
// we should create our own root node in the body element before rendering into it
let root = document.createElement('div')
const store = initStore()
root.id = 'root'
document.body.appendChild(root)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
