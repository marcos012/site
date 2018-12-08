import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-batera',
  templateUrl: './batera.component.html',
  styleUrls: ['./batera.component.scss']
})
export class BateraComponent implements OnInit {
  
  private active: boolean = false
  private play: any
  private audio: any

  constructor() { 
    document.addEventListener('keyup', this.click)
  }

  ngOnInit() { }

  click = (e: any) => {
    this.audio = document.querySelector('#' + e.code);
    if (this.audio) {
      this.audio.currentTime = 0
      this.audio.play()
    }
    if (e.code === 'keyB') {
      this.fullG()
    }
  }

  fullG = () => {
    if (this.active === false) {
      this.active = true
      this.play = setInterval(this.playG, 950);
    } else {
      this.active = false
      clearInterval(this.play)
    }
  }
  playG = (audio: any) => {
    audio = document.querySelector('#KeyG');
    audio.currentTime = 0;
    audio.play();
  }
}
