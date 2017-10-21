import { handleActions } from 'redux-actions'
import { random } from 'lodash'

export default handleActions({}, {
  id: 'T-1375',
  name: 'Nicollet Mall',
  location: 'Minneapolis, MN',
  open: new Date(2017, 9, 3, 7),
  close: new Date(2017, 9, 3, 22),
  stats: {
    today: {
      score: random(100, 5000),
      ranks: random(1, 100),
    },
    week: {
      score: random(100, 5000),
      ranks: random(1, 100),
    }
  },
  countdown: {
    end: new Date(2017, 11, 24, 0, 0 , 0),
    label: 'Black Friday'
  }
})
