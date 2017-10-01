import { Action } from '@ngrx/store';

export const ONEONE = 'ONEONE';
export const TWOTWO = 'TWOTWO';

let storeDef = {
  store_number: 1234,
  store_name: 'T2124',
  city: 'Coon Rapids, MN',
  store_hours: '9a - 5p',
  promos: {
    promo: 'SNES CLASSIC',
    details: 'This is it'
  }
}

export function stateReducer(state: any = storeDef, action: Action) {
	switch (action.type) {
		case ONEONE:
      let o = { store_number: state.store_number + 1 };
      return Object.assign({}, state, o);

		case TWOTWO:
			let o = { store_number: state.store_number - 1 };
      return Object.assign({}, state, o);

		default:
			return state;
	}
}
