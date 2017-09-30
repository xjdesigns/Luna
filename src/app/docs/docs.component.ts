import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: 'app/docs/docs.component.html'
})
export class DocsComponent {
  chart: any;
  constructor() {
    this.chart = {
      type: 'Bar',
      data: data['Bar']
    }
  }
}

declare var require: any
const data: any = {
  "Bar": {
    "labels": [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "series": [
      [
        5,
        4,
        3,
        7,
        5,
        10,
        3,
        4,
        8,
        10,
        6,
        8
      ],
      [
        3,
        2,
        9,
        5,
        4,
        6,
        4,
        6,
        7,
        8,
        7,
        4
      ]
    ]
  }
}
