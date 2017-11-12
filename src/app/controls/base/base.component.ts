import { Component, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit {
  editMode: boolean;
  value: string;
    
  constructor() { }

  toggleMode(value: boolean) {
    this.editMode = value;
  }

  ngOnInit() {
  }
}
