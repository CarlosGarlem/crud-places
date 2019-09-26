import { Component, OnInit } from '@angular/core';
import { Place, storage } from '../../data/localStorage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-places-create',
  templateUrl: './places-create.component.html',
  styleUrls: ['./places-create.component.scss']
})

export class PlacesCreateComponent implements OnInit {
  public model: Place;
  public data: any [];

  constructor(private router: Router) { }
  ngOnInit():void {
    this.model = new Place();
    this.data = storage;
    //this.data = storage.sort((a, b) => (a.id > b.id) ? -1 : 1);
  }

  addItem(){
    this.model.id = this.data.length + 1;
    this.data.push(this.model);
    this.router.navigate(['/places-read'])
  }

}
