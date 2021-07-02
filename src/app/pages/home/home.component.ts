import { Component, OnInit } from '@angular/core';

import { AnimalService } from '../../services/animalservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: Boolean = true;
  error: Boolean = false;

  imageUrl: String = "https://images.dog.ceo/breeds/terrier-american/n02093428_1439.jpg"

  constructor(
    private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    this.getHomeImage().subscribe(
      (res: any) => {
        if(res?.message){
          this.imageUrl = res.message;
          this.loading = false;
        }
        else{
          this.imageUrl = res[0].url;
          this.loading = false;
        }
      },
      (error) => {
        this.loading = false;
        this.error = true
      }
    )
  }

  getHomeImage(){
    return this.animalService.getImage()
  }

  getMessage(){
    return this.error ? "Algo errado ocorreu" : "Carregando, fique com este lindo dog"
  }

  shouldShowMessage(){
    return this.error || this.loading;
  }
}
