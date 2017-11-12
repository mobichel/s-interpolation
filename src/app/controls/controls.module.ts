import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumberComponent } from './number/number.component';
import { ListComponent } from './list/list.component';
import { RangeComponent } from './range/range.component';
import { StringComponent } from './string/string.component';
import { UnknownComponent } from './unknown/unknown.component';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule
  ], 
  declarations: [
    NumberComponent,
    ListComponent,
    RangeComponent,
    StringComponent,
    UnknownComponent
  ],
  exports: [
    NumberComponent,
    ListComponent,
    RangeComponent,
    StringComponent,
    UnknownComponent
  ]
})
export class ControlsModule { }
