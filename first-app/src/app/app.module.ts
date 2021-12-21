import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { Calculator1Component } from './calculator1/calculator1.component';
import { Calculator2Component } from './calculator2/calculator2.component';

/* 
declarations : 
  Register all the UI entities
    Components, Pipes, Directives
providers :
  Register all the non-UI entities
    Services
imports:
  Register all the other dependent modules

bootstrap:
  Register the root component
*/
@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    Calculator1Component,
    Calculator2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
