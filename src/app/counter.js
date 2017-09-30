"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INCREMENT = 'INCREMENT';
exports.DECREMENT = 'DECREMENT';
exports.RESET = 'RESET';
var storeDefault = {
    number: 1234,
    name: 'jason'
};
function counterReducer(state, action) {
    if (state === void 0) { state = storeDefault; }
    console.warn('STATE::', state);
    switch (action.type) {
        case exports.INCREMENT:
            return { name: 'jason', number: state.number + 1 };
        // return state + 1;
        case exports.DECREMENT:
            return state.number - 1;
        case exports.RESET:
            return 0;
        default:
            return state;
    }
}
exports.counterReducer = counterReducer;
