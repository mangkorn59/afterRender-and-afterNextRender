import { afterNextRender, afterRender, AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-c22',
  templateUrl: './c22.component.html',
  styleUrl: './c22.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class C22Component implements AfterViewInit{
  testX!:number;
  testY:boolean = false;
  constructor() {
    afterRender(() => {
      for (let x = 0; x<1000; x++){
        this.testX = x;
      }
      this.testY = true;
    });
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit c22.');
  }
  ngOnInit(): void {
    console.log('ngOnInit C22');
  }
}

