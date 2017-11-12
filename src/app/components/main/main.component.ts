import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import actions from '../../redux/actions'

// ag grid
import {GridOptions} from "ag-grid/main";

@Component({
  selector: 'my-main',
  templateUrl: 'app/components/main/main.component.html'
})

export class MainComponent {
  state: any;
  stateData: any;

  // track grid editing
  currentRowEdit: any = {};
  allSessionEdits: any = [];

  // ag grid
  public gridOptions:GridOptions;
  public rowData:any[];
  public columnDefs:any[];

  constructor(private store: Store<any>) {
    this.store.dispatch(actions.metrics.update())

    this.state = store.select(s => s.state.metrics);
    this.state.subscribe(state => {
      console.warn('STATE::', state);
      this.stateData = state;
    });

    // we pass an empty gridOptions in, so we can grab the api out
    this.gridOptions = <GridOptions> {
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      onRowEditingStarted: this.rowEditingStarted,
      onRowEditingStopped: this.rowEditingStopped,
      defaultColDef: {
        minWidth: 30,
        editable: true
      },
      enableColResize: true,
      rowHeight: 20,
      editType: 'fullRow'
    };
    this.columnDefs = [
      {
        headerName: '#',
        width: 30,
        checkboxSelection: true,
        suppressSorting: true,
        suppressMenu: true,
        pinned: true,
        suppressFilter: true,
        editable: false
      },
      {
        headerName: "Make",
        field: "make"
      },
      {
        headerName: "Model",
        field: "model"
      },
      {
        headerName: "Price",
        field: "price"
      }
    ];
    this.createRowData();
  }

  rowEditingStarted(params) {
    console.warn('editing started', params);
    let arr = [];
    for (let key in params.data) {
      arr.push(params.data[key]);
    }
    this.currentRowEdit = arr;
  }

  rowEditingStopped(params) {
    console.warn('params', params);
  }

  createRowData() {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
      let obj = {
        make: "Toyota",
        model: "Celica",
        price: this.getRandomIntInclusive(10, 10000)
      }
      arr.push(obj);
    }
    this.rowData = arr;
  }

  hello() {
    this.store.dispatch(actions.jason.testme())
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
}
