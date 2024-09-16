import { afterNextRender, afterRender, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-c12',
  templateUrl: './c12.component.html',
  styleUrl: './c12.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class C12Component {
  constructor() {
    afterNextRender(() => {
      console.log('afterRender c12');
    });
  }
  ngOnInit(): void {
    console.log('ngOnInit C12');
  }
  ngAfterViewInit(): void {
    console.log('afterView C12');
  }

}
