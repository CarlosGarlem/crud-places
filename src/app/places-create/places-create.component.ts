import { Component, OnInit } from '@angular/core';
import { Place, storage, placeMsg } from '../../data/localStorage';
import {Router} from '@angular/router';
import {  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-places-create',
  templateUrl: './places-create.component.html',
  styleUrls: ['./places-create.component.scss']
})

export class PlacesCreateComponent implements OnInit {
  public model: Place;
  public data: any [];
  public place_val: any;
  placeForm: any;
  
  constructor(private formBuilder: FormBuilder, private router: Router) {
      
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
    this.data = storage;
    this.place_val = placeMsg;
    //this.data = storage.sort((a, b) => (a.id > b.id) ? -1 : 1);
  }

  addItem(){
    this.model.id = this.data.length + 1;
    this.model.rating = Number(this.model.rating.toFixed(2));
    this.data.push(this.model);
    this.router.navigate(['/places-read'])
  }

}
