import { afterNextRender, afterRender, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-render',
  templateUrl: './after-render.component.html',
  styleUrl: './after-render.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AfterRenderComponent implements AfterViewInit, OnInit {
  @HostListener('document:keydown', ['$event']) onKeydown(
    event: KeyboardEvent,
  ) {
    switch (event.key) {
      case 'ArrowLeft': // left
        this.numberValue1 = this.numberValue1 - 1;
        break;
      case 'ArrowUp': // up
        this.numberValue2 = this.numberValue2 + 1;

        break;
      case 'ArrowRight': // right
        this.numberValue1 = this.numberValue1 + 1;

        break;
      case 'ArrowDown': // down
        this.numberValue2 = this.numberValue2 - 1;

        break;
    }
  }
  constructor() {
    afterRender(() => {
      console.log('afterRender แม่');
      const div: HTMLElement = this.divElement.nativeElement;

      div.style.width = this.numberValue1.toString() + '%';
      div.style.height = this.numberValue2.toString() + 'px';
      this.numberValue3 = this.numberValue1 * this.numberValue2;
    });
  }

  @ViewChild('myDiv') divElement!: ElementRef;

  boolean: boolean = false;
  sizeWidth: string = 'Width10';
  numberValue1: number = 50;
  numberValue2: number = 50;
  numberValue3: number = 0;


  ngOnInit(): void {
    console.log('ngOnInit แม่');

  }
  ngAfterViewInit(): void {

    console.log('ngAfterViewInit แม่');
    this.boolean = !this.boolean;
    this.numberValue3 = this.numberValue1 + this.numberValue2;

  }
  changeSizeWidth(size: string) {
    console.log(size);

    const div: HTMLElement = this.divElement.nativeElement;
    // this.sizeWidth = size;

    // div.style.width = size;
    // div.style.height = '200px';
  }

}
