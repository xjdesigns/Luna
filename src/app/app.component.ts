import { Component } from '@angular/core';
import { Router, NavigationStart } from  '@angular/router';

import { AlertService } from './services/alert-service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ONEONE, TWOTWO } from './reducers/state.reducer';

export interface promotional {
  promo: string,
  details: string,
  date: string
}

interface AppState {
  state: {
    store_number: number,
    store_name: string,
    city: string,
    store_hours: string,
    promos: promotional
  }
}

interface State {
  store_number: number,
  store_name: string,
  city: string,
  store_hours: string,
  promos: promotional
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  appMenuOpen: boolean = false;
  data: State;
  state: Observable<State>;

  constructor(private router: Router, private as: AlertService, private store: Store<AppState>) {
    let b = document.querySelector('body');

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.appMenuOpen = false;
      }
    });
    this.state = store.select('state');
    this.state.subscribe(v => {
      this.data = v;
    });
  }

  wango() {
    this.store.dispatch({ type: ONEONE });
  }

  toggleMenu() {
    this.appMenuOpen = !this.appMenuOpen;
  }

  createAlert() {
    this.as.addAlert('Toast Message', 'success');
  }
}
