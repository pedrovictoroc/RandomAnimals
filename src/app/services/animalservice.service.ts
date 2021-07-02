import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  protected httpClient: HttpClient;

  //https://dog.ceo/dog-api/documentation/random
  protected randomDogApi: string = "https://dog.ceo/api/breeds/image/random";

  //https://documenter.getpostman.com/view/4016432/RWToRJCq
  protected randomCatApi: string = "https://api.thecatapi.com/v1/images/search?format=json";

  constructor(
    protected http: HttpClient
  ) { 

    this.httpClient = http
  }

  public getImage(){
    const deciderResult = this.decider()

    if(deciderResult == "cat"){
      return this.getCatImage()
    }

    return this.getDogImage()
  }

  private decider(){
    const value = Math.random()

    return value <= 0.5 ? "cat" : "dog"
  }

  private getCatImage(){
    return this.httpClient.get(this.randomCatApi);
  }

  private getDogImage(){
    return this.httpClient.get(this.randomDogApi);
  }
}
