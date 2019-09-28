import { Component, OnInit } from '@angular/core';
import { Place, storage, placeMsg } from '../../data/localStorage';
import {Router} from '@angular/router';
import {  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-places-edit',
  templateUrl: './places-edit.component.html',
  styleUrls: ['./places-edit.component.scss']
})
export class PlacesEditComponent implements OnInit {

  public data: any = [];
  public model: Place;
  public place_val: any;
  placeForm: any;
  
  constructor(private formBuilder: FormBuilder, private router: Router) {
    
      
    this.placeForm = this.formBuilder.group({
      instance: [null, Validators.required],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[\\w\\s]+')]],
      place: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[\\w\\s]+')]],
      activity: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[\\w\\s]+')]],
      description: ['', [Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[\\w\\s]+')]],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5), Validators.pattern('^[0-9]([\\.][0-9])?')]]
      //([a-zA-Z])+\s*
    });


  }

  ngOnInit() {
    this.data = storage;
    this.model = new Place();
    this.place_val = placeMsg;
  }

  get instance() {
		return this.placeForm.get('instance');
	}

  editItem(id: any) {
    let item = this.data.find(place => place.id === id);
    let index = this.data.indexOf(item);
    this.model.rating = Number(this.model.rating.toFixed(2));
    this.data[index] = this.model; 
    this.router.navigate(['/places-read'])
  }

  onPlaceChange(){
    this.model = this.instance.value;
    console.log(this.instance.value);
  }
}
