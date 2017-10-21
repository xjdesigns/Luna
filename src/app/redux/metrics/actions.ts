// import faker from 'faker'
import { random } from 'lodash'

function update () {
  return [
    {
      id: 1,
      name: 'Average Basket Size',
      shortName: 'Avg. Basket',
      display: 'BigNumber',
      x: 1,
      y: 1,
      width: 1,
      height: 1,
      data: {
        current: random(1, 14),
        lastWeek: {
          relative: random(1, 14),
          total: random(1, 14)
        },
        lastYear: {
          relative: random(1, 14),
          total: random(1, 14)
        },
        display: 'number'
      }
    },
    {
      id: 2,
      name: 'Pickup Orders',
      shortName: 'Pickup',
      display: 'BigNumber',
      x: 2,
      y: 1,
      width: 1,
      height: 1,
      data: {
        current: random(1, 14),
        lastWeek: {
          relative: random(1, 14),
          total: random(14, 30)
        },
        lastYear: {
          relative: random(1, 14),
          total: random(13, 30)
        },
        display: 'number'
      }
    },
    {
      id: 3,
      name: 'Online Orders',
      shortName: 'Online',
      display: 'BigNumber',
      x: 3,
      y: 1,
      width: 1,
      height: 1,
      data: {
        current: random(1, 14),
        lastWeek: {
          relative: random(1, 14),
          total: random(14, 30)
        },
        lastYear: {
          relative: random(1, 14),
          total: random(13, 30)
        },
        display: 'number'
      }
    },
    {
      id: 4,
      name: 'Drive Up Orders',
      shortName: 'Drive Up',
      display: 'BigNumber',
      x: 4,
      y: 1,
      width: 1,
      height: 1,
      data: {
        current: random(1, 14),
        lastWeek: {
          relative: random(1, 14),
          total: random(14, 30)
        },
        lastYear: {
          relative: random(1, 14),
          total: random(13, 30)
        },
        display: 'number'
      }
    },


    // OverTime
    {
      id: 5,
      name: 'Cartwheel Total Saved',
      shortName: 'Cartwheel Saves',
      display: 'OverTime',
      x: 1,
      y: 3 ,
      width: 2,
      height: 2,
      data: {
        display: 'currency',
        yAxisLabel: 'Ammount Saved ($)',
        xAxisLabel: 'Day',
        data: {
          columns: ['9/28', '9/29', '9/30', '10/1', '10/2'],
          current: [random(0, 1000, true), random(0, 1000, true), random(0, 1000, true), random(0, 1000, true), random(0, 1000, true)],
          lastYear: [random(0, 1000, true), random(0, 1000, true), random(0, 1000, true), random(0, 1000, true), random(0, 1000, true)]
        }
      }
    },
    {
      id: 6,
      name: 'New REDcard Signups',
      shortName: 'REDcard',
      display: 'OverTime',
      x: 3,
      y: 3,
      width: 2,
      height: 2,
      data: {
        display: 'currency',
        yAxisLabel: 'Number of Signups',
        xAxisLabel: 'Day',
        data: {
          columns: ['9/28', '9/29', '9/30', '10/1', '10/2'],
          current: [random(0, 100, true), random(0, 100, true), random(0, 100, true), random(0, 100, true), random(0, 100, true)],
          lastYear: [random(0, 100, true), random(0, 100, true), random(0, 100, true), random(0, 100, true), random(0, 100, true)]
        }
      }
    },

    // HotItem
    {
      id: 7,
      name: 'XBox One X',
      shortName: 'XBox',
      display: 'HotItem',
      x: 1,
      y: 2,
      width: 2,
      height: 1,
      data: {
        released: false,
        releaseTime: new Date('2017-11-07T00:00:00+0500')
      }
    },
    {
      id: 8,
      name: 'SNES Classic',
      shortName: 'SNES',
      display: 'HotItem',
      x: 3,
      y: 2,
      width: 2,
      height: 1,
      data: {
        released: true,
        inStock: false,
        nearestStore: 'Richfield',
        nearestStoreDistance: 5.4
      }
    },
  ]
}

function testme () {
  return [
    {
      id: 1,
      name: 'Average Basket Size',
      shortName: 'Avg. Basket',
      display: 'BigNumber',
      x: 1,
      y: 1,
      width: 1,
      height: 1,
      data: {
        current: random(1, 14),
        lastWeek: {
          relative: random(1, 14),
          total: random(1, 14)
        },
        lastYear: {
          relative: random(1, 14),
          total: random(1, 14)
        },
        display: 'number'
      }
    },
    {
      id: 2,
      name: 'Pickup Orders',
      shortName: 'Pickup',
      display: 'BigNumber',
      x: 2,
      y: 1,
      width: 1,
      height: 1,
      data: {
        current: random(1, 14),
        lastWeek: {
          relative: random(1, 14),
          total: random(14, 30)
        },
        lastYear: {
          relative: random(1, 14),
          total: random(13, 30)
        },
        display: 'number'
      }
    },
    {
      id: 3,
      name: 'Online Orders',
      shortName: 'Online',
      display: 'BigNumber',
      x: 3,
      y: 1,
      width: 1,
      height: 1,
      data: {
        current: random(1, 14),
        lastWeek: {
          relative: random(1, 14),
          total: random(14, 30)
        },
        lastYear: {
          relative: random(1, 14),
          total: random(13, 30)
        },
        display: 'number'
      }
    },
    {
      id: 4,
      name: 'Drive Up Orders',
      shortName: 'Drive Up',
      display: 'BigNumber',
      x: 4,
      y: 1,
      width: 1,
      height: 1,
      data: {
        current: random(1, 14),
        lastWeek: {
          relative: random(1, 14),
          total: random(14, 30)
        },
        lastYear: {
          relative: random(1, 14),
          total: random(13, 30)
        },
        display: 'number'
      }
    },


    // OverTime
    {
      id: 5,
      name: 'Cartwheel Total Saved',
      shortName: 'Cartwheel Saves',
      display: 'OverTime',
      x: 1,
      y: 3 ,
      width: 2,
      height: 2,
      data: {
        display: 'currency',
        yAxisLabel: 'Ammount Saved ($)',
        xAxisLabel: 'Day',
        data: {
          columns: ['9/28', '9/29', '9/30', '10/1', '10/2'],
          current: [random(0, 1000, true), random(0, 1000, true), random(0, 1000, true), random(0, 1000, true), random(0, 1000, true)],
          lastYear: [random(0, 1000, true), random(0, 1000, true), random(0, 1000, true), random(0, 1000, true), random(0, 1000, true)]
        }
      }
    },
    {
      id: 6,
      name: 'New REDcard Signups',
      shortName: 'REDcard',
      display: 'OverTime',
      x: 3,
      y: 3,
      width: 2,
      height: 2,
      data: {
        display: 'currency',
        yAxisLabel: 'Number of Signups',
        xAxisLabel: 'Day',
        data: {
          columns: ['9/28', '9/29', '9/30', '10/1', '10/2'],
          current: [random(0, 100, true), random(0, 100, true), random(0, 100, true), random(0, 100, true), random(0, 100, true)],
          lastYear: [random(0, 100, true), random(0, 100, true), random(0, 100, true), random(0, 100, true), random(0, 100, true)]
        }
      }
    },

    // HotItem
    {
      id: 7,
      name: 'XBox One X',
      shortName: 'XBox',
      display: 'HotItem',
      x: 1,
      y: 2,
      width: 2,
      height: 1,
      data: {
        released: false,
        releaseTime: new Date('2017-11-07T00:00:00+0500')
      }
    },
    {
      id: 8,
      name: 'SNES Classic',
      shortName: 'SNES',
      display: 'HotItem',
      x: 3,
      y: 2,
      width: 2,
      height: 1,
      data: {
        released: true,
        inStock: false,
        nearestStore: 'Richfield',
        nearestStoreDistance: 5.4
      }
    },
  ]
}

export default {
  UPDATE: update,
  TESTME: testme
}
