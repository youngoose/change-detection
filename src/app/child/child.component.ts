import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() data: Observable<any>;
  fruits: string[] = [];

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.data.subscribe((newFruit) => {
      this.fruits = [...this.fruits, ...newFruit];
      this.cdRef.markForCheck();
    });
  }
}
