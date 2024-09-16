import { afterNextRender, afterRender, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-c21',
  templateUrl: './c21.component.html',
  styleUrl: './c21.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class C21Component implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {
    afterNextRender(() => {
      console.log('afterRender c21');
      // this.boolean = !this.boolean;
      // console.log(this.boolean);
      // setTimeout(() => {
      //   // this.boolean = !this.boolean;


      // }, 2000);
    });
  }

  boolean: boolean = false;
  number: number = 0;



  ngOnInit(): void {
    console.log('ngOnInit C21');
    // this.boolean = !this.boolean;
  }
  test() {
    console.log('---------------------------------');

  }

  ngAfterViewInit(): void {
    this.boolean = !this.boolean;
    // this.cdr.detectChanges(); 
    this.cdr.markForCheck();
  }

  countNumber(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.number = Number(inputElement.value); 
    console.log('New number value:', this.number);
  }




}
