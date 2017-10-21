import { combineReducers } from 'redux'

import metricsReducer from './metrics/reducers'
import storeReducer from './store/reducer'
// import newsReducer from './news/reducer'
// import scheduleWidgetReducer from './scheduleWidget/reducer'

export default combineReducers({
  metrics: metricsReducer,
  store: storeReducer
  // news: newsReducer,
  // scheduleWidget: scheduleWidgetReducer,
})
