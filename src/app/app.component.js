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
var router_1 = require("@angular/router");
var alert_service_1 = require("./services/alert-service");
var store_1 = require("@ngrx/store");
var state_reducer_1 = require("./reducers/state.reducer");
var AppComponent = (function () {
    function AppComponent(router, as, store) {
        var _this = this;
        this.router = router;
        this.as = as;
        this.store = store;
        this.appMenuOpen = false;
        var b = document.querySelector('body');
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationStart) {
                _this.appMenuOpen = false;
            }
        });
        this.counter = store.select('state');
        this.counter.subscribe(function (v) {
            _this.data = v;
        });
    }
    AppComponent.prototype.wango = function () {
        this.store.dispatch({ type: state_reducer_1.ONEONE });
    };
    AppComponent.prototype.toggleMenu = function () {
        this.appMenuOpen = !this.appMenuOpen;
    };
    AppComponent.prototype.createAlert = function () {
        this.as.addAlert('Toast Message', 'success');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, alert_service_1.AlertService, store_1.Store])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
