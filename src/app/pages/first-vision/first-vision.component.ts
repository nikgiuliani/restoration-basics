import { Component, OnInit } from '@angular/core';
import { Vision_Accounts } from 'src/app/constants/vision-data';
@Component({
  selector: 'app-first-vision',
  templateUrl: './first-vision.component.html',
  styleUrls: ['./first-vision.component.css'],
})
export class FirstVisionComponent implements OnInit {
  leftSelection: string;
  rightSelection: string;
  leftText: string;
  rightText: string;
  leftTitle: string;
  rightTitle: string;
  comparison: string;
  Context1: string;
  Context2: string;

  constructor() {}

  ngOnInit() {}

  onButtonClick(column: 'left' | 'right', year: string) {
    if (column === 'left') {
      this.leftSelection = year;
    } else {
      this.rightSelection = year;
    }

    this.updateText();
  }

  updateText() {
    if (this.leftSelection && this.rightSelection) {
      if (parseInt(this.leftSelection) > parseInt(this.rightSelection)) {
        const key = `${this.rightSelection}-${this.leftSelection}`;
        const data = Vision_Accounts[key];
        if (data) {
          this.leftText = data.rightText;
          this.rightText = data.leftText;
          this.leftTitle = data.rightTitle;
          this.rightTitle = data.leftTitle;
          this.comparison = data.comparison;
          this.Context1 = data.Context1;
          this.Context2 = data.Context2;
        }
        //also output them in reverse...!!
      } else if (this.leftSelection === this.rightSelection) {
        const data = Vision_Accounts['tryAgain'];
        if (data) {
          this.leftText = data.leftText;
          this.rightText = data.rightText;
          this.leftTitle = data.leftTitle;
          this.rightTitle = data.rightTitle;
          this.comparison = data.comparison;
          this.Context1 = data.Context1;
          this.Context2 = data.Context2;
        }
      } else {
        const key = `${this.leftSelection}-${this.rightSelection}`;
        const data = Vision_Accounts[key];

        if (data) {
          this.leftText = data.leftText;
          this.rightText = data.rightText;
          this.leftTitle = data.leftTitle;
          this.rightTitle = data.rightTitle;
          this.comparison = data.comparison;
          this.Context1 = data.Context1;
          this.Context2 = data.Context2;
        }
      }
    }
  }
}
