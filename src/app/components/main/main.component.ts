import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import actions from '../../redux/actions'

@Component({
  selector: 'my-main',
  templateUrl: 'app/components/main/main.component.html'
})

export class MainComponent {
  constructor(private store: Store<any>) {
    this.store.dispatch(actions.metrics.update())

    // this.state = store.select(s => s.state.metrics);
    // this.state.subscribe(state => {
    //   console.warn('STATE::', state);
    //   this.stateData = state;
    // });
  }

  hello() {
    this.store.dispatch(actions.jason.testme())
  }
}
