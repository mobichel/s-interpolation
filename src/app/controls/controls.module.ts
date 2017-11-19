import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import { NumberComponent } from './number/number.component';
import { ListComponent } from './list/list.component';
import { RangeComponent } from './range/range.component';
import { StringComponent } from './string/string.component';
import { AutofocusDirective } from './autofocus.directive';
import {
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  declarations: [
    BaseComponent,
    NumberComponent,
    ListComponent,
    RangeComponent,
    StringComponent,
    AutofocusDirective
  ],
  exports: [
    BaseComponent,
    NumberComponent,
    ListComponent,
    RangeComponent,
    StringComponent
  ]
})
export class ControlsModule { }
