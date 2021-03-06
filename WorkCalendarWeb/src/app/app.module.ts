import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MonthsTableComponent } from './months.table/months.table.component';
import { MonthsServiceService } from './services/months-service.service';
import { TodaydateComponent } from './todaydate/todaydate.component';
import { TodaydateService } from './services/todaydate.service';


@NgModule({
  declarations: [
    AppComponent,
    MonthsTableComponent,
    TodaydateComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [MonthsServiceService, TodaydateService],
  bootstrap: [AppComponent],
  exports: [TodaydateComponent]
})
export class AppModule { }
