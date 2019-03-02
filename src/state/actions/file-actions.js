import { createAction } from 'redux-act'

export default {
  fileAdd: createAction('File added to state'),
  convertFiles: createAction('Started conversion'),
  filesConverted: createAction('Files converted successfully!')
}
