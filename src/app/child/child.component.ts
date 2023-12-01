import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() fruits: string[] = [];

  constructor(private cdRef: ChangeDetectorRef) {}

  refresh() {
    this.cdRef.detectChanges();
  }
}
