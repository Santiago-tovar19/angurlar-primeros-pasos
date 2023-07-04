import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
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
