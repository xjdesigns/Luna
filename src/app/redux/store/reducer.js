"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("redux-actions");
var lodash_1 = require("lodash");
exports.default = redux_actions_1.handleActions({}, {
    id: 'T-1375',
    name: 'Nicollet Mall',
    location: 'Minneapolis, MN',
    open: new Date(2017, 9, 3, 7),
    close: new Date(2017, 9, 3, 22),
    stats: {
        today: {
            score: lodash_1.random(100, 5000),
            ranks: lodash_1.random(1, 100),
        },
        week: {
            score: lodash_1.random(100, 5000),
            ranks: lodash_1.random(1, 100),
        }
    },
    countdown: {
        end: new Date(2017, 11, 24, 0, 0, 0),
        label: 'Black Friday'
    }
});
