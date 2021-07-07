import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  currentPage: number = 0;

  data = [
    {
      title: "Mas ei, não é só de doguinhos e gatitos que tu gosta né?",
      imageUrl: ""
    },
    {
      title: "Eu sei que tu também gosta bastante de Naruto",
      imageUrl: "assets/image/uzumakiFamily.jpg"
    },
    {
      title: "O que é perfeito, pq adivinha? Eu também!!",
      imageUrl: "https://media.tenor.com/images/e664cd2a9a2be19385d2c3e955ffbb70/tenor.gif"
    },
    {
      title: "Mas sabe do que eu também gosto? De ti, e muito ... e a bastante tempo, né?",
      imageUrl: "assets/image/narutoHinata.jpg"
    },
    {
      title: "Mas dessa vez, e agora tu conhece Hamilton então posso dizer: I am not throwin' away my shot",
      imageUrl: ""  
    },
    {
      title: "Pois sempre que eu estou contigo fico completamente Helpless, então...",
      imageUrl: ""  
    }
    
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getCurrentTitle(){
    return this.data[this.currentPage].title
  }

  getCurrentImage(){
    return this.data[this.currentPage].imageUrl
  }

  goToNextPage(){
    if(this.currentPage + 1 != this.data.length){
      this.currentPage = this.currentPage + 1
    }
    else{
      this.router.navigate(['finalmente'])
    }
  }
}
