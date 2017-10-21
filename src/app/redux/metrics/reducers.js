"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("redux-actions");
var actions_1 = require("../actions");
exports.default = redux_actions_1.handleActions((_a = {},
    _a[actions_1.default.metrics.update] = function (state, action) { return action.payload; },
    _a[actions_1.default.jason.testme] = function (state, action) { return action.payload; },
    _a), []);
var _a;
