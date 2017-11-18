import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!this.el) {
      return;
    }
    this.el.nativeElement.focus();
  }
}
