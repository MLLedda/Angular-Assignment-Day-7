import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Assignment6Component } from '@mcleonard13/assignment-6';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Assignment6Component,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
