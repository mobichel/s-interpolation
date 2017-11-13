import { Component, ViewEncapsulation, HostListener, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponent {
  editMode: boolean;
    
  constructor(private el: ElementRef) { }

  toggleMode(value: boolean) {
    this.editMode = value;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.el) {
      return;
    }
    if (event.target.parentNode === null) {
      return;
    }
    if (!this.el.nativeElement.contains(event.target)) {
      this.toggleMode(false);
    }
  }
}
