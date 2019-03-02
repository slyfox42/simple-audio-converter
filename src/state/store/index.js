import { compose, createStore } from 'redux'
import rootReducer from '../reducers'

export default () => {
  let middlewares = []

  if (window !== null && window.devToolsExtension) {
    middlewares.push(window.devToolsExtension())
  }

  return createStore(rootReducer, undefined, compose(...middlewares))
}
