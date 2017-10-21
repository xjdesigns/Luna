"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducers_1 = require("./metrics/reducers");
var reducer_1 = require("./store/reducer");
// import newsReducer from './news/reducer'
// import scheduleWidgetReducer from './scheduleWidget/reducer'
exports.default = redux_1.combineReducers({
    metrics: reducers_1.default,
    store: reducer_1.default
    // news: newsReducer,
    // scheduleWidget: scheduleWidgetReducer,
});
