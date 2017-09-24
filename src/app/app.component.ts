import { Component } from '@angular/core';
import { Router, NavigationStart } from  '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  appMenuOpen: boolean = false;

  constructor(private router: Router) {
    let b = document.querySelector('body');

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.appMenuOpen = false;
      }
    });
  }

  toggleMenu() {
    this.appMenuOpen = !this.appMenuOpen;
  }
}
