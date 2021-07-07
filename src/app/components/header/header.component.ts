import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  selectedAnimal = new EventEmitter()

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  navigateToSection(animal: string){
    this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: { 'animal': animal }});
  }

}
