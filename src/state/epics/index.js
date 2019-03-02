import { combineEpics } from 'redux-observable'
import conversion from './conversion'

export default combineEpics(...[conversion])
