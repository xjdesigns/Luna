import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { DocsComponent } from './docs/docs.component';
// import { ComponentsRouting } from './components/components/components.routes';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'docs', component: DocsComponent }
  // ...ComponentsRouting
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
