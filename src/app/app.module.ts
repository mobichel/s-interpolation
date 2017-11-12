import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CompilerComponent } from './compiler.component';
import { ParseService } from './parse.service';

@NgModule({
  declarations: [
    AppComponent,
    CompilerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ParseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
