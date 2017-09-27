import { Component } from '@angular/core';
import {HeroService} from './services/calendars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  values: string[] = ["Wow!!!"];

  constructor(private heroService: HeroService) {
    this.heroService
      .getVaules()
      .then(values => {
        console.log(values);
        this.values = values as string[]; });
  }


}
