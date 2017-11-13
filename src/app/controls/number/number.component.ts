import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'number',
  inputs: ['value: config'],
  templateUrl: './number.component.html',
  styleUrls: ['../base/base.component.css', './number.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NumberComponent extends BaseComponent {
  value: string;

  setValue(v) {
    this.value = v;
  }
}
