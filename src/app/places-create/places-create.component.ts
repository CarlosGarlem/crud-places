import { Component, OnInit } from '@angular/core';
import { Place, placeMsg } from '../../data/localStorage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {  FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-places-create',
  templateUrl: './places-create.component.html',
  styleUrls: ['./places-create.component.scss']
})

export class PlacesCreateComponent implements OnInit {
  public model: Place;
  readonly ROOT_URL = 'http://placesapi.eastus.azurecontainer.io:3000'
  public place_val: any;
  placeForm: any;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {
      
    this.placeForm = this.formBuilder.group({
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[\\w\\s]+')]],
      place: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[\\w\\s]+')]],
      activity: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[\\w\\s]+')]],
      description: ['', [Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[\\w\\s]+')]],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5), Validators.pattern('^[0-9]([\\.][0-9])?')]]
      //([a-zA-Z])+\s*
    });

  }
  
  ngOnInit():void {
    this.model = new Place();
    this.place_val = placeMsg;
    //this.data = storage.sort((a, b) => (a.id > b.id) ? -1 : 1);
  }

  addItem(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    var place = this.model
    delete place.id
    const req = this.http.post(this.ROOT_URL + '/api/v1/places', place, httpOptions);
    req.subscribe()
    alert(place.place + " (" + place.country + ")" + " created successfully")
    this.router.navigate(['/places-read'])
  }

  
}
