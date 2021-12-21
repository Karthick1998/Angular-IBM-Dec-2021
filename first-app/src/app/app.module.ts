import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
