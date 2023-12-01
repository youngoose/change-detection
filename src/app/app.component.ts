import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fruits = new BehaviorSubject(['apple', 'banana', 'orange']);

  addFruits(newFruit) {
    this.fruits.next(newFruit);
  }
}
