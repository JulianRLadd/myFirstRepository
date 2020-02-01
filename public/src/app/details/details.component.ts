import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:any;
pet:any;
clicked:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) {
    this.pet = { name: "", type: "", description: "" }
   }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      console.log('******OnINIT*******',params.get('id'))
      this.id = params.get('id')
      this.getPet(this.id);
      this.clicked = false;
    })
  }
  goHome() {
    this._router.navigate(['/']);
  }
  likePet(pet) {
    this.pet.likes+=1;
    let observable = this._httpService.likeThisPet(pet);
    console.log('**************LikePET******************');
    observable.subscribe(data=> {
      console.log("Liked pet!",data);
      this.clicked = true;
    })
  }
  getPet(id) {
    let observable = this._httpService.getPet(id);
    console.log('**************GetAUTHOR******************');
    observable.subscribe(data=> {
      console.log(data);
      this.pet = data;
    })
  }
  adoptPet(id){
    console.log('**************COMPONENT******************');
    let observable = this._httpService.deletePet(id)
    observable.subscribe(data =>{
      console.log("Adopted pet!",data)
      this.goHome();
    })
  }
}
