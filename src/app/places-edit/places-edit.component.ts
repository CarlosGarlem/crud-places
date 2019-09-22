import { Component, OnInit } from '@angular/core';
import { Place, storage } from '../../data/localStorage';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-places-edit',
  templateUrl: './places-edit.component.html',
  styleUrls: ['./places-edit.component.scss']
})
export class PlacesEditComponent implements OnInit {

  public data: any = [];
  public model: Place;

  constructor() {}
  ngOnInit() {
    this.data = storage;
    this.model = new Place();
  }

  editItem(id: any) {
    let item = this.data.find(place => place.id === id);
    let index = this.data.indexOf(item);
    this.data[index] = this.model; 
  }
}
