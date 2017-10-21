"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("redux-actions");
var actions_1 = require("./metrics/actions");
// import newsActions from './news/actions'
// import scheduleWidgeActions from './scheduleWidget/actions'
exports.default = redux_actions_1.createActions({
    METRICS: actions_1.default,
    JASON: actions_1.default
    // NEWS: newsActions,
    // SCHEDULE_WIDGET: scheduleWidgeActions,
});
