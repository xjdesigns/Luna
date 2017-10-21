import { createActions } from 'redux-actions'

import metricActions from './metrics/actions'
// import newsActions from './news/actions'
// import scheduleWidgeActions from './scheduleWidget/actions'

export default createActions({
  METRICS: metricActions,
  JASON: metricActions
  // NEWS: newsActions,
  // SCHEDULE_WIDGET: scheduleWidgeActions,
})
