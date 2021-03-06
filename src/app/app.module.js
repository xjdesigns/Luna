"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var chartist_component_1 = require("./chartist/chartist.component");
// COMPONENTS
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./components/welcome/welcome.component");
// DIRECTIVES
var code_display_directive_1 = require("./shared/code-display.directive");
// PROVIDER BARRELS
// import {
//   SixPixelsProvider
// } from './components'
// import { Ng2Component, Ng2Provider } from './NG2';
// ALERTS
var alert_1 = require("./services/alert/alert");
var alert_service_1 = require("./services/alert-service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            chartist_component_1.ChartistModule
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            code_display_directive_1.CodeDisplayDirective,
            alert_1.AlertComponent
            // ...SixPixelsProvider
            // ...Ng2Provider
        ],
        providers: [
            alert_service_1.AlertService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
