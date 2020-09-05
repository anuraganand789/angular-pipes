import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title     = 'angular-pipes';
  birthDay  = new Date(1989, 9, 1);
  amount    = 12;
  toggle    = true;
  power     = 10;
  factor    = 1;

  get format() { return this.toggle ? 'shortDate' : 'fullDate' ; }
  toggleDateFormat() { this.toggle = !this.toggle; }
}
