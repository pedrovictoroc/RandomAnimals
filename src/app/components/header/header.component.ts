import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  selectedAnimal = new EventEmitter()

  constructor(
  ) { }

  ngOnInit(): void {
  }

  navigateToSection(animal: string){
    this.selectedAnimal.emit(animal);
  }

}
