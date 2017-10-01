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
import { DocsComponent } from './docs/docs.component';

// DIRECTIVES
import { CodeDisplayDirective } from './shared/code-display.directive';

// PROVIDER BARRELS
import {
  LunaProvider
} from './components'
import { Ng2Component, Ng2Provider } from './NG2';

// ALERTS
import { AlertComponent } from './services/alert/alert';
import { AlertService } from './services/alert-service';

// REDUX
import { StoreModule } from '@ngrx/store';
import { stateReducer } from './reducers/state.reducer';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartistModule,
    StoreModule.forRoot({ state: stateReducer })
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    CodeDisplayDirective,
    AlertComponent,
    DocsComponent,
    ...LunaProvider,
    ...Ng2Provider
  ],
  providers: [
    AlertService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
