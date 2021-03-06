import { createReducer } from 'redux-act'
import fileActions from '../actions/file-actions'
import u from 'updeep'

const initialState = {
  paths: ['/Users/federico/Desktop/battery.wav']
}

const addPath = filePath => paths => [].concat(paths, [filePath])

const fileReducer = createReducer(
  {
    [fileActions.fileAdd]: (state, payload) =>
      u(
        {
          paths: addPath(payload)
        },
        state
      ),
    [fileActions.filesConverted]: state =>
      u(
        {
          paths: []
        },
        state
      )
  },
  initialState
)

export default fileReducer
