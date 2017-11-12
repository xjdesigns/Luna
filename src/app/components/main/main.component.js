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
var store_1 = require("@ngrx/store");
var actions_1 = require("../../redux/actions");
var MainComponent = (function () {
    function MainComponent(store) {
        var _this = this;
        this.store = store;
        // track grid editing
        this.currentRowEdit = {};
        this.allSessionEdits = [];
        this.store.dispatch(actions_1.default.metrics.update());
        this.state = store.select(function (s) { return s.state.metrics; });
        this.state.subscribe(function (state) {
            console.warn('STATE::', state);
            _this.stateData = state;
        });
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = {
            onGridReady: function () {
                _this.gridOptions.api.sizeColumnsToFit();
            },
            onRowEditingStarted: this.rowEditingStarted,
            onRowEditingStopped: this.rowEditingStopped,
            defaultColDef: {
                minWidth: 30,
                editable: true
            },
            enableColResize: true,
            rowHeight: 20,
            editType: 'fullRow'
        };
        this.columnDefs = [
            {
                headerName: '#',
                width: 30,
                checkboxSelection: true,
                suppressSorting: true,
                suppressMenu: true,
                pinned: true,
                suppressFilter: true,
                editable: false
            },
            {
                headerName: "Make",
                field: "make"
            },
            {
                headerName: "Model",
                field: "model"
            },
            {
                headerName: "Price",
                field: "price"
            }
        ];
        this.createRowData();
    }
    MainComponent.prototype.rowEditingStarted = function (params) {
        console.warn('editing started', params);
        var arr = [];
        for (var key in params.data) {
            arr.push(params.data[key]);
        }
        this.currentRowEdit = arr;
    };
    MainComponent.prototype.rowEditingStopped = function (params) {
        console.warn('params', params);
    };
    MainComponent.prototype.createRowData = function () {
        var arr = [];
        for (var i = 0; i < 1000; i++) {
            var obj = {
                make: "Toyota",
                model: "Celica",
                price: this.getRandomIntInclusive(10, 10000)
            };
            arr.push(obj);
        }
        this.rowData = arr;
    };
    MainComponent.prototype.hello = function () {
        this.store.dispatch(actions_1.default.jason.testme());
    };
    MainComponent.prototype.getRandomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'my-main',
            templateUrl: 'app/components/main/main.component.html'
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
