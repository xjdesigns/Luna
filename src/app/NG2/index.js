"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Ng2Component } from './ng2.component';
var countdown_component_1 = require("./countdown.component");
// import { SelectlistDisplayComponent } from './selectListDisplay.component';
// import { SelectlistComponent } from './selectlist.component';
// import { CarouselDisplayComponent } from './carousel-display.component';
// import { CarouselComponent } from './carousel.component';
// import { AlertDisplayComponent } from './alert-display/alert-display.component';
exports.Ng2Provider = [
    // Ng2Component,
    countdown_component_1.CountdownComponent
    // SelectlistDisplayComponent,
    // SelectlistComponent,
    // CarouselDisplayComponent,
    // CarouselComponent,
    // AlertDisplayComponent
];
var ng2_component_1 = require("./ng2.component");
exports.Ng2Component = ng2_component_1.Ng2Component;
