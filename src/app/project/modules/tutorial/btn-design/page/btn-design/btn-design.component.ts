import { afterRender, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-btn-design',
  templateUrl: './btn-design.component.html',
  styleUrl: './btn-design.component.scss'
})
export class BtnDesignComponent {
  constructor() {
    afterRender(() => {
      const button = this.divElement.nativeElement;
      button.style.fontWeight = this.fontWeight + 'px';
      button.style.color = this.fontColor;
      button.style.backgroundColor = this.backgroundColor;
    });
  }
  label: string = 'Click me';
  fontWeight: string = 'normal';
  fontColor: string = '#FFFFFF';
  backgroundColor: string = 'black';
  @ViewChild('customBtn') divElement!: ElementRef;

}
