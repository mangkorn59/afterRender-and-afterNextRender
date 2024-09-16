import { afterRender, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  gamePlay:boolean = false;
  selectedStyle:any;

  

  @ViewChild('style1') style1!: ElementRef;
  @ViewChild('style2') style2!: ElementRef;
  @ViewChild('style3') style3!: ElementRef;


  constructor(private el: ElementRef) {}
  letsPlayGame(){
    this.gamePlay = !this.gamePlay
    const style1Checked = this.el.nativeElement.querySelector('#style1').checked;
    const style2Checked = this.el.nativeElement.querySelector('#style2').checked;
    const style3Checked = this.el.nativeElement.querySelector('#style3').checked;

    if (style1Checked) { 
      this.selectedStyle = {
        "bgBar" : "#300001",
        "bar1" : "#8E00C7",
        "bar2" : "#EE007B",
        "bar3" : "#DB4DFF",
        "bar4" : "#AE0088",
      };
    } else if (style2Checked) {
      this.selectedStyle = {
        "bgBar" : "#018a8f",
        "bar1" : "#e94643",
        "bar2" : "#fa7856",
        "bar3" : "#f9ce5f",
      };
    } else if (style3Checked) {
      this.selectedStyle = {
        "bgBar" : "#2d698d",
        "bar1" : "#b9e8e9",
        "bar2" : "#e2f6f7",
        "bar3" : "#272743",
      }; 
    }

    // console.log('Selected game style:', this.selectedStyle);
  }
}
