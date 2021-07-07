import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finally',
  templateUrl: './finally.component.html',
  styleUrls: ['./finally.component.scss']
})
export class FinallyComponent implements OnInit {

  audio1 = new Audio()
  audio2 = new Audio()
  audio3 = new Audio()
  
  constructor() { }

  ngOnInit(): void {
    this.audio1.src = "assets/audio/rojao.mp3"
    this.audio1.load()
    this.audio2.src = "assets/audio/rojao.mp3"
    this.audio2.load()
    this.audio3.src = "assets/audio/rojao.mp3"
    this.audio3.load()
  }


  success(){
    this.audio1.play()
    
    setTimeout(() => {
      this.audio2.play()
    }, 800)
    
    setTimeout(() => {
      this.audio3.play()
    }, 1800)

  }
}
