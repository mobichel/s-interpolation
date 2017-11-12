import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'range',
  inputs: ['config'],
  templateUrl: './range.component.html',
  styleUrls: ['../base/base.component.css', './range.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RangeComponent extends BaseComponent {
  config: string;
  valueMin: string;
  valueMax: string;

  constructor() {
    super();
  }

  ngOnInit() {
    const parts = this.config.split(',');
    this.valueMin = parts[0];
    this.valueMax = parts[1];
  }

  setMinValue(v) {
    this.valueMin = v;
  }

  setMaxValue(v) {
    this.valueMax = v;
  }
}
