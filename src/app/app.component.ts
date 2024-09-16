import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  afterNextRender,
  afterRender,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    afterRender(() => {
      // console.log('DOM has been updated!');
    });
  }
  // ngOnInit(): void {
  //   console.log('ngOnInit');


  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  //   afterRender(() => {
  //     console.log('DOM has been updated after view initialization!');
  //     // ทำงานกับ DOM หลังจากการเรนเดอร์ของวิว
  //   });

  // }

}
