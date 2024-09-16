import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
class SomeChartLibrary {
  constructor(private _element: HTMLElement) {
  }
}
@Component({
  selector: 'app-test-tutorial',
  templateUrl: './test-tutorial.component.html',
  styleUrl: './test-tutorial.component.scss'
})
export class TestTutorialComponent {
  // @ViewChild('content') private _contentRef!: ElementRef;
  // private _resizeObserver: ResizeObserver|null = null;
  constructor() {
    // afterNextRender(() => {
    //   this._resizeObserver = new ResizeObserver(() => {
    //     console.log('afterNextRender');
    //   });
    //   this._resizeObserver.observe(this._contentRef.nativeElement);

    // });
  }
  // ngAfterViewInit(): void {
  //   this._resizeObserver = new ResizeObserver(() => {
  //     console.log('ngAfterViewInit');
  //   });
  //   this._resizeObserver.observe(this._contentRef.nativeElement);

  // }
  // ngOnDestroy() {
  //   this._resizeObserver?.disconnect();
  //   this._resizeObserver = null;
  // }

  fetchData(callback: (data: any) => void) {
    console.log('1');
    // สมมติว่าเราเรียก API ที่ใช้เวลาในการตอบกลับ
    setTimeout(() => {
    console.log('2');
      const data = { name: 'John', age: 30 };
      // เรียก callback function เมื่อข้อมูลถูกโหลดเสร็จ
      callback(data);
    }, 2000);
  }

  ngOnInit() {
    // Register callback function ตอนที่ข้อมูลถูกโหลดเสร็จ
    console.log('3');
    this.fetchData((data) => {
      console.log('Data loaded:', data);
      console.log('4');
    });
  }

}
