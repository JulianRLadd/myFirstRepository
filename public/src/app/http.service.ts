import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
pet:any;
  constructor(private _http: HttpClient) { 

  }

getAllPets(){
  // our http response is an Observable, store it in a variable
  //let tempObservable = this._http.get('/tasks');
  // subscribe to the Observable and provide the code we would like to do with our data from the response
  //tempObservable.subscribe(data => console.log("Got our tasks!", data));
  return this._http.get('/pets');
}
getPet(id){
  // our http response is an Observable, store it in a variable
  let tempObservable = this._http.get('/pets/'+id);
  // subscribe to the Observable and provide the code we would like to do with our data from the response
  tempObservable.subscribe(data => console.log("Got our pet from service!", data));
  return this._http.get('/pets/'+id)
}
  addPet(newPet){
    return this._http.post('/pets', newPet)
}
  updatePet(pet){
    return this._http.put('/pets/'+pet._id, pet)
}
  likeThisPet(pet){
    return this._http.put('/pets/'+pet._id+'/like',pet)
}
  deletePet(id){
    return this._http.delete('/pets/'+id)
}

}