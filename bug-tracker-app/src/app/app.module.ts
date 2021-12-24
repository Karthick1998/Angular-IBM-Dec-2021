import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugEditComponent } from './bugs/components/bugEdit/bug-edit.component';
import { BugSortComponent } from './bugs/components/bugSort/bug-sort.component';
import { BugStatsComponent } from './bugs/components/bugStats/bug-stats.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
    BugSortComponent,
  ],
  imports: [
    UtilsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
