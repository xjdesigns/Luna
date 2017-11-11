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
        this.store.dispatch(actions_1.default.metrics.update());
        this.state = store.select(function (s) { return s.state.metrics; });
        this.state.subscribe(function (state) {
            console.warn('STATE::', state);
            _this.stateData = state;
        });
    }
    MainComponent.prototype.hello = function () {
        this.store.dispatch(actions_1.default.jason.testme());
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
