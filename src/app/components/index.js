"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// COMPONENTS
var accordion_component_1 = require("./components/accordion/accordion.component");
var ComponentsProvider = [
    accordion_component_1.AccordionComponent
];
// export { ComponentsComponent } from './components/components.component';
// EXPORT PROVIDERS AS ONE
exports.LunaProvider = ComponentsProvider.slice();
