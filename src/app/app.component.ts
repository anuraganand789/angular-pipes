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

  setTitle(keyboardEvent: KeyboardEvent) {
    this.title = (keyboardEvent.target as HTMLInputElement).value;
  }

  setFactor(keyboardEvent: KeyboardEvent){
    this.factor = +(keyboardEvent.target as HTMLInputElement).value;
  }

  setPower(keyboardEvent: KeyboardEvent){
    this.power = +(keyboardEvent.target as HTMLInputElement).value;
  }

  get format() { return this.toggle ? 'shortDate' : 'fullDate' ; }
  toggleDateFormat() { this.toggle = !this.toggle; }
}
