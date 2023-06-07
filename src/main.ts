import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class App {
  findSquare(start: number, end: number) {
    // exit condition
    if (start > end) {
      return;
    } else if (start % 2 == 0) {
      console.log(start);
    }
    // call doSomething again
    this.findSquare(start++, end);
  }
}

bootstrapApplication(App);
