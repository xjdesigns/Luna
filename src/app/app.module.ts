import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from  '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {
  ChartistModule
} from './chartist/chartist.component';

// COMPONENTS
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

// DIRECTIVES
import { CodeDisplayDirective } from './shared/code-display.directive';

// PROVIDER BARRELS
// import {
//   SixPixelsProvider
// } from './components'
import { Ng2Component, Ng2Provider } from './NG2';

// ALERTS
import { AlertComponent } from './services/alert/alert';
import { AlertService } from './services/alert-service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartistModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    CodeDisplayDirective,
    AlertComponent,
    // ...SixPixelsProvider
    ...Ng2Provider
  ],
  providers: [
    AlertService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
