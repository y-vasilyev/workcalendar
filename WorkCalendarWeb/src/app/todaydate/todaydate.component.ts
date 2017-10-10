///<reference path="../services/todaydate.service.ts"/>
import { Component, OnInit } from '@angular/core';
import {TodayDate} from '../shared/todayDate';
import {TodaydateService} from '../services/todaydate.service';

@Component({
  selector: 'app-todaydate',
  templateUrl: './todaydate.component.html'
})
export class TodaydateComponent implements OnInit {

  todayDate: TodayDate = new TodayDate();

  constructor(private todaydateService: TodaydateService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.todaydateService
      .getDate()
      .then(values => {
        console.log(values);
        this.todayDate = values; });
  }
}
