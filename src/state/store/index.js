import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from '../epics'
import rootReducer from '../reducers'

export default () => {
  let middlewares = []
  const epicMiddleware = createEpicMiddleware()

  middlewares.push(applyMiddleware(epicMiddleware))

  if (window !== null && window.devToolsExtension) {
    middlewares.push(window.devToolsExtension())
  }

  const store = createStore(rootReducer, undefined, compose(...middlewares))

  epicMiddleware.run(rootEpic)

  return store
}
