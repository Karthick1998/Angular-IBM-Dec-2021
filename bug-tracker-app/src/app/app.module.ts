import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugStatsComponent } from './bugs/components/bugStats/bug-stats.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { ElapsedPipe } from './bugs/pipes/elapsed.pipe';
import { SortPipe } from './bugs/pipes/sort.pipe';
import { TrimTextPipe } from './bugs/pipes/trimText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe,
    ClosedCountPipe,
    SortPipe,
    ElapsedPipe,
    BugStatsComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
