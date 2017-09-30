// counter.ts
import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

let storeDefault = {
  number: 1234,
  name: 'jason'
}

export function counterReducer(state: any = storeDefault, action: Action) {
  console.warn('STATE::', state);
	switch (action.type) {
		case INCREMENT:
    return { name: 'jason', number: state.number + 1};
			// return state + 1;

		case DECREMENT:
			return state.number - 1;

		case RESET:
			return 0;

		default:
			return state;
	}
}
