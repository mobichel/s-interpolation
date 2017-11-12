import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'string',
  inputs: ['value: config'],
  templateUrl: './string.component.html',
  styleUrls: ['../base/base.component.css', './string.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class StringComponent extends BaseComponent {
  value: string;

  constructor() {
    super();
  }

  setValue(v) {
    this.value = v;
  }
}
