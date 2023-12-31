import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public counter: number = 10;

  increaseOne() {
    this.counter = this.counter + 1;
  }

  decreaseOne() {
    this.counter = this.counter - 1;
  }

  increaseBy(value: number) {
    this.counter = this.counter + value;
  }

  decreaseBy(value: number) {
    this.counter = this.counter - value;
  }
}
