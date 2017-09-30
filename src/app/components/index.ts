// COMPONENTS
import { AccordionComponent } from './components/accordion/accordion.component';

const ComponentsProvider = [
  AccordionComponent
];
// export { ComponentsComponent } from './components/components.component';

// EXPORT PROVIDERS AS ONE
export const LunaProvider = [
  ...ComponentsProvider
];
