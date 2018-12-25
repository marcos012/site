import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batera',
  templateUrl: './batera.component.html',
  styleUrls: ['./batera.component.scss']
})
export class BateraComponent {

  private audio: any;

  constructor() {
    document.addEventListener('keyup', this.press);
  }

  press = (e: any) => {
    this.playSound('#' + e.code);
  }

  click = (e: any) => {
    this.playSound(e);
  }

  private playSound(e: any) {
    this.audio = document.querySelector(e);
    this.audio.currentTime = 0;
    this.audio.play();
  }
}
