import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {TodayDate} from '../shared/todayDate';

@Injectable()
export class TodaydateService {

  getDate(): Date {
    let d = new Date();
    return d;
  }
}

//
