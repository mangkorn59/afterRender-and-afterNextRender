import { afterNextRender, afterRender, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrl: './game-play.component.scss'
})
export class GamePlayComponent {

  @Input() selectedStyle!: any;

  score: number = 0;
  playCount: number = 10;
  correctScore: number = 0;
  incorrectScore: number = 0;

  correctRate: number = 0;
  incorrectRate: number = 0;
  playingCount: number = 0;
  playingRate: number = 0;
  resultScore: number = 0;

  randomNumber!: number;
  randomResultNumber!: number;

  btnDisabled: boolean = false;

  @ViewChild('correctRateBar') correctRateBar!: ElementRef<HTMLInputElement>;
  @ViewChild('incorrectRateBar') incorrectRateBar!: ElementRef<HTMLInputElement>;
  @ViewChild('playingRateBar') playingRateBar!: ElementRef<HTMLInputElement>;
  @ViewChild('resultScoreBar') resultScoreBar!: ElementRef<HTMLInputElement>;
  @ViewChild('numberInput') numberInput!: ElementRef<HTMLInputElement>;
  @ViewChild('bgResult') bgResult!: ElementRef<HTMLInputElement>;
  answerNumber: number | null = null;

  constructor(
    private el: ElementRef
  ) {
    afterRender(() => {
      this.setResultBar();

    });
    afterNextRender(() => {
      this.styleResultBar();
    });
  }
  ngOnInit(): void {
    this.randomNumber = this.getRandomNumber(1, 9);
    this.randomResultNumber = this.getRandomNumber(10, 18);
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  submit() {
    const value = this.numberInput.nativeElement.value;
    this.randomNumber
    this.randomResultNumber
    this.answerNumber = value ? parseInt(value, 10) : null;
    this.playCount -= 1;
    this.playingCount += 1;

    if (this.randomNumber + this.answerNumber! === this.randomResultNumber) {
      this.correctScore += 1;
      this.score += 1;
    } else {
      this.score -= 1;
      this.incorrectScore += 1;
    }

    this.numberInput.nativeElement.value = '';
    this.answerNumber = null;
    this.randomNumber = this.getRandomNumber(1, 9);
    this.randomResultNumber = this.getRandomNumber(10, 18);

    this.correctRate = Math.floor((this.correctScore / this.playingCount) * 100);
    this.incorrectRate = Math.floor((this.incorrectScore / this.playingCount) * 100);
    this.playingRate = this.playingCount;
    this.resultScore = Math.floor((this.correctScore / this.playingCount) * 100);
    this.isGameOver();
  }
  clear() {
    this.numberInput.nativeElement.value = '';
    this.answerNumber = null;
    this.randomNumber = this.getRandomNumber(1, 9);
    this.randomResultNumber = this.getRandomNumber(10, 18);

    this.correctRate = 0;
    this.incorrectRate = 0;
    this.playingRate = 0;
    this.resultScore = 0;

    this.playCount = 10;
    this.playingCount = 0;
    this.correctScore = 0;
    this.score = 0;
    this.incorrectScore = 0;

    this.btnDisabled = false;
  }
  isGameOver() {
    if (this.playCount === 0 || this.score < -4 || this.score > 4) {
      this.btnDisabled = true;
    }
  }
  setResultBar() {
    this.el.nativeElement.querySelector('#correctRateBar').style.width = `${this.correctRate}%`;
    this.el.nativeElement.querySelector('#incorrectRateBar').style.width = `${this.incorrectRate}%`;
    this.el.nativeElement.querySelector('#playingRateBar').style.width = `${this.playingRate * 10}%`;
    this.el.nativeElement.querySelector('#resultScoreBar').style.width = `${this.resultScore}%`;
  }
  styleResultBar() {
    this.el.nativeElement.querySelector('#correctRateBar').style.backgroundColor = this.selectedStyle.bar1;
    this.el.nativeElement.querySelector('#incorrectRateBar').style.backgroundColor = this.selectedStyle.bar2;
    this.el.nativeElement.querySelector('#playingRateBar').style.backgroundColor = this.selectedStyle.bar3;
    this.el.nativeElement.querySelector('#resultScoreBar').style.backgroundColor = this.selectedStyle.bar4;
    this.el.nativeElement.querySelector('#bgResult').style.backgroundColor = this.selectedStyle.bgBar;
    console.log(this.selectedStyle.bgBar);
    
  }

}
