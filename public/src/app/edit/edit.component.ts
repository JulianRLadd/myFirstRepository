import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:any;
pet:any;
errors:any;
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
      this.errors = "";
    })
  }
  goHome() {
    this._router.navigate(['/']);
  }
  getPet(id) {
    let observable = this._httpService.getPet(id);
    console.log('**************GetAUTHOR******************');
    observable.subscribe(data=> {
      console.log(data);
      this.pet = data;
    })
  }
  editPet(pet:any){
    console.log('**************COMPONENT******************');
    this.pet.name = this.pet.name;
    this.pet.type = this.pet.type;
    this.pet.description = this.pet.description;
    this.pet.skill1 = this.pet.skill1;
    this.pet.skill2 = this.pet.skill2;
    this.pet.skill3 = this.pet.skill3;
    let observable = this._httpService.updatePet(this.pet)
    observable.subscribe(data =>{
      if(data.errors){
        console.log(data.message)
        this.errors = data.message;
      }
      else{
      console.log("Edited pet!",data)
      this.goHome();
      }
    })
  }
}
