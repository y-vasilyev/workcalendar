import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MonthsTableComponent } from './months.table/months.table.component';
import {MonthsServiceService} from './services/months-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MonthsTableComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [MonthsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
