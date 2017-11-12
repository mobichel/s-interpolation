import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberComponent } from './number/number.component';
import { ListComponent } from './list/list.component';
import { RangeComponent } from './range/range.component';
import { StringComponent } from './string/string.component';

@NgModule({ imports: [
    CommonModule
  ], 
  declarations: [
    NumberComponent,
    ListComponent,
    RangeComponent,
    StringComponent
  ],
  exports: [
    NumberComponent,
    ListComponent,
    RangeComponent,
    StringComponent
  ]
})
export class ControlsModule { }
