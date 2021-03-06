import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'list',
  inputs: ['config'],
  templateUrl: './list.component.html',
  styleUrls: ['../base/base.component.css', './list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent extends BaseComponent {
  config: string;
  value: string;
  options: string[];

  ngOnInit() {
    const parts = this.config.split(':');
    this.value = parts[1] || '';
    this.options = (parts[0] || '').split(',');
  }

  setValue(v) {
    this.value = v;
  }
}
