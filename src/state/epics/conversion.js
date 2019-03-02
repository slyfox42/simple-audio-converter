import { asapScheduler, from } from 'rxjs'
import { filter, mapTo, switchMap } from 'rxjs/operators'
import conversionScript from '../../conversionScript'
import fileActions from '../actions/file-actions'

const conversionEpic = (action$, _, ts = asapScheduler) =>
  action$.pipe(
    filter(action => action.type === fileActions.convertFiles.getType()),
    switchMap(({ payload }) => {
      const promises = payload.map(filePath => conversionScript(filePath))
      return from(Promise.all(promises), ts)
    }),
    mapTo(fileActions.filesConverted())
  )

export default conversionEpic
