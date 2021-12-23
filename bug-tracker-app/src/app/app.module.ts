import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugEditComponent } from './bugs/components/bugEdit/bug-edit.component';
import { BugSortComponent } from './bugs/components/bugSort/bug-sort.component';
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
    BugStatsComponent,
    BugEditComponent,
    BugSortComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
