"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONEONE = 'ONEONE';
exports.TWOTWO = 'TWOTWO';
var storeDef = {
    store_number: 1234,
    store_name: 'T2124',
    city: 'Coon Rapids, MN',
    store_hours: '9a - 5p',
    promos: {
        promo: 'SNES CLASSIC',
        details: 'This is it'
    }
};
function stateReducer(state, action) {
    if (state === void 0) { state = storeDef; }
    switch (action.type) {
        case exports.ONEONE:
            var o = { store_number: state.store_number + 1 };
            return Object.assign({}, state, o);
        case exports.TWOTWO:
            var o = { store_number: state.store_number - 1 };
            return Object.assign({}, state, o);
        default:
            return state;
    }
}
exports.stateReducer = stateReducer;
