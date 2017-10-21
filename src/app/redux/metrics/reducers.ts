import { handleActions } from 'redux-actions'

import actions from '../actions'

export default handleActions({
  [actions.metrics.update]: (state, action) => action.payload,
  [actions.jason.testme]: (state, action) => action.payload
}, [])
