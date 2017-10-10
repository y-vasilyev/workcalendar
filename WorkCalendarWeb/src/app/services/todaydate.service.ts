import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {TodayDate} from '../shared/todayDate';

@Injectable()
export class TodaydateService {

  private todayDateUrl = 'api/todaydate';  // URL to web api
  constructor(private http: Http) {
  }
  getDate(): Promise<TodayDate> {
    return this.http.get(this.todayDateUrl)
      .toPromise()
      .then(response =>  {
        let data = response.json();
        console.log(data)
        return Object.assign(new TodayDate(),  data);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
