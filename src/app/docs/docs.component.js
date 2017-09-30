"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocsComponent = (function () {
    function DocsComponent() {
        this.chart = {
            type: 'Bar',
            data: data['Bar']
        };
    }
    DocsComponent = __decorate([
        core_1.Component({
            selector: 'app-docs',
            templateUrl: 'app/docs/docs.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], DocsComponent);
    return DocsComponent;
}());
exports.DocsComponent = DocsComponent;
var data = {
    "Bar": {
        "labels": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        "series": [
            [
                5,
                4,
                3,
                7,
                5,
                10,
                3,
                4,
                8,
                10,
                6,
                8
            ],
            [
                3,
                2,
                9,
                5,
                4,
                6,
                4,
                6,
                7,
                8,
                7,
                4
            ]
        ]
    }
};
