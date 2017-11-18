import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CompilerComponent } from './compiler.component';
import { ParseService } from './parse.service';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { ControlsModule } from './controls/controls.module';

@NgModule({
  declarations: [
    AppComponent,
    CompilerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ControlsModule
  ],
  providers: [ParseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
