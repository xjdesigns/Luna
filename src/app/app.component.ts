import { Component } from '@angular/core';
import { Router, NavigationStart } from  '@angular/router';

import { AlertService } from './services/alert-service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './counter';

interface AppState {
  counter: any = {
    number: any,
    name: 'string'
  }
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  appMenuOpen: boolean = false;
  jason: any;
  counter: Observable<number>;

  constructor(private router: Router, private as: AlertService, private store: Store<AppState>) {
    let b = document.querySelector('body');

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.appMenuOpen = false;
      }
    });
    this.counter = store.select('counter');
    this.counter.subscribe(v => {
      console.warn(v);
      this.jason = v;
      console.warn('jason', this.jason);
    });
    console.warn(this.counter);
  }

  increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

  toggleMenu() {
    this.appMenuOpen = !this.appMenuOpen;
  }

  createAlert() {
    this.as.addAlert('Toast Message', 'success');
  }
}
