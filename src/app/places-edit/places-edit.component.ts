import { Component, OnInit } from '@angular/core';
import { Place, storage } from '../../data/localStorage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-places-edit',
  templateUrl: './places-edit.component.html',
  styleUrls: ['./places-edit.component.scss']
})
export class PlacesEditComponent implements OnInit {

  public data: any = [];
  public model: Place;

  constructor(private router: Router) {}
  ngOnInit() {
    this.data = storage;
    this.model = new Place();
  }

  editItem(id: any) {
    let item = this.data.find(place => place.id === id);
    let index = this.data.indexOf(item);
    this.data[index] = this.model; 
    this.router.navigate(['/places-read'])
  }
}
