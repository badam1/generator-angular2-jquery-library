import { Component } from '@angular/core';
import moment from 'moment';

// add imports here for jquery related js libs


import * as jqueryProxy from 'jquery';
const $: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy;

@Component({
  selector: 'sample-component',
  template: `<h1>Sample component</h1>`
})
export class SampleComponent {

  constructor() {
  }

}
