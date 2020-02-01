import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets:any;
  selectedPet:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.pets = [];
    this.getPetsFromService();
  }
  deletePet(id){
    console.log(`Deleting pet...`,id)
    let observable = this._httpService.deletePet(id);
    observable.subscribe(data => {
      console.log("Deleted pet!", data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.
      this.getPetsFromService();
    });
  }
  getPetsFromService(){
    let observable = this._httpService.getAllPets();
    observable.subscribe(data => {
      console.log("Got our pets!", data)
      // In this example, the array of cakes is assigned to the key 'cakes' in the data object. 
      // This may be different for you, depending on how you set up your cake API.
      this.pets = data;
      console.log(this.pets)
    });

  }
}
