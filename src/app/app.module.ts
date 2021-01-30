import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { PonctuationComponent } from './ponctuation/ponctuation.component';
import {HttpClientModule  } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    PonctuationComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
