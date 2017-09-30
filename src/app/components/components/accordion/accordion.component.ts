import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: 'app/components/components/accordion/accordion.component.html'
})

export class AccordionComponent {
  accordionOpen: boolean = false;
  @Input() title: any = 'Hello World';

  toggleAccordion() {
    this.accordionOpen = !this.accordionOpen;
  }
}
