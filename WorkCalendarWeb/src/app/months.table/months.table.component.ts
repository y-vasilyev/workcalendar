import { Component, OnInit } from '@angular/core';
import {Month} from '../shared/month'
import {MonthsServiceService} from "../services/months-service.service";

@Component({
  selector: 'app-months-table',
  templateUrl: './months.table.component.html'
})

export class MonthsTableComponent implements OnInit {

  months: Month[];

  constructor(private monthsService: MonthsServiceService) { }

   ngOnInit() {
      this.refresh()
  }


  refresh(){
    this.monthsService
      .getMonths()
      .then(values => {
        console.log(values);
        this.months = values; });
  }
}
