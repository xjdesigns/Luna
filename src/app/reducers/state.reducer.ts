import { Action } from '@ngrx/store';

export const ONEONE = 'ONEONE';
export const TWOTWO = 'TWOTWO';
export const THREETHREE = 'THREETHREE';

let storeDef = {
  store_number: 1234,
  store_name: 'T2124',
  city: 'Coon Rapids, MN',
  store_hours: '9a - 5p',
  promos: {
    promo: 'SNES CLASSIC',
    details: 'This is it',
    date: '2019/12/25'
  }
}

export function stateReducer(state: any = storeDef, action: Action) {
  var o;
  switch (action.type) {
    case ONEONE:
      o = { store_number: state.store_number + 1 };
      return Object.assign({}, state, o);

    case TWOTWO:
      o = { store_number: state.store_number - 1 };
      return Object.assign({}, state, o);

    case THREETHREE:
      o = {
        promos: {
          promo: 'SEGA',
          details: 'Hello world',
          date: '2017/12/25'
        }
      };
      console.warn('OBJ::', Object.assign({}, state, o));
      return Object.assign({}, state, o);

    default:
      return state;
  }
}
