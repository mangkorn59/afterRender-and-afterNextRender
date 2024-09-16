import { afterNextRender, afterRender, AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { C21Component } from "../c2/c21/c21.component";
import { C22Component } from '../c2/c22/c22.component';

@Component({
  selector: 'app-c11',
  templateUrl: './c11.component.html',
  styleUrl: './c11.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class C11Component implements AfterViewInit {
  constructor() {
    afterNextRender(() => {
      console.log('afterRender c11');
    });
  }
  boolean:boolean = false;
  ngOnInit(): void {
    console.log('ngOnInit C11');
  }
  ngAfterViewInit(): void {
    console.log('afterView C11');

  }

  test() {
    console.log('---------------------------------');
    this.boolean = !this.boolean;
  }

}
