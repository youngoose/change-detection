import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fruits = ['apple', 'banana', 'orange'];

  addFruits(newFruit: string) {
    this.fruits = [...this.fruits, newFruit];
  }
}
