import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    if (!this.el) {
      return;
    }
    this.el.nativeElement.focus();
  }
}
