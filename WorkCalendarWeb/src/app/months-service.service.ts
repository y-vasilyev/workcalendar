import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Month} from "./shared/month";

// import { Hero } from './hero';

@Injectable()
export class MonthsServiceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/months';  // URL to web api

  constructor(private http: Http) {
  }

  getMonths(): Promise<Month[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response =>  {
        let arr = Array();
        let data = response.json();

        console.log(data)
        for(var item in data)
        {
           var m = Object.assign(new Month(),  data[item]);
           arr.push(m)
        }
        return arr;

      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
