import { Component, OnInit } from '@angular/core';
import { Place, storage, placeMsg } from '../../data/localStorage';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-places-edit',
  templateUrl: './places-edit.component.html',
  styleUrls: ['./places-edit.component.scss']
})
export class PlacesEditComponent implements OnInit {

  public data: Observable<any>
  public model: Place;
  public place_val: any;
  placeForm: any;
  readonly ROOT_URL = 'http://localhost:3000'
  
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {
    
      
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
    this.data = this.http.get(this.ROOT_URL + '/api/v1/places')
    this.model = new Place();
    this.place_val = placeMsg;
  }

  get instance() {
		return this.placeForm.get('instance');
	}

  editItem(id: any) {
    var place = this.model
    delete place.id
    const req = this.http.put(this.ROOT_URL + '/api/v1/places/' + id.toString(), place);
    req.subscribe()
    this.router.navigate(['/places-read'])
  }

  onPlaceChange(){
    this.model = this.instance.value;;
  }
}
