import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { AnimalService } from '../../services/animalservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  loading: Boolean = true;
  error: Boolean = false;

  haveParams: Boolean = false;

  imageUrl: String = "https://images.dog.ceo/breeds/terrier-american/n02093428_1439.jpg";

  counter: number = 0;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( (params) => {
      if(!!params["animal"]){
        if(this.isValidParam(params["animal"])){
          this.haveParams = true
          this.refreshPage(params["animal"].toLowerCase())
        }
      }

      this.counter = this.counter + 1

      if(this.counter == 6){
        this.router.navigate(['/surpresa'])
      }
    });


    if(!this.haveParams){
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
  }

  ngOnChanges(){
    console.log('teste')
  }

  getHomeImage(){
    return this.animalService.getImage()
  }

  getMessage(){
    return this.error ? "Algo errado ocorreu" : "Carregando..."
  }

  shouldShowMessage(){
    return this.error || this.loading;
  }

  isValidParam(param: string){
    return param.toLowerCase() == "cat" || param.toLowerCase() == "dog"
  }

  //remove, can be implemented on ngOnInit
  refreshPage(animalName: string){
    this.loading = true

    switch(animalName){
      case "dog":
        this.animalService.getDogImage().subscribe((res: any) => {
          if(res?.message){
            this.imageUrl = res.message;
            this.loading = false;
          }
          else{
            this.imageUrl = res[0].url;
            this.loading = false;
          }
          
          this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: { 'animal': "dog" }});
        },
        (error) => {
          this.loading = false;
          this.error = true
        }
      )
      return
    case "cat":
      this.animalService.getCatImage().subscribe(
        (res: any) => {
          if(res?.message){
            this.imageUrl = res.message;
            this.loading = false;
          }
          else{
            this.imageUrl = res[0].url;
            this.loading = false;
          }
          
          this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: { 'animal': "cat" }});
        },
        (error) => {
          this.loading = false;
          this.error = true
        }
      )
      return
    }
  }
}
