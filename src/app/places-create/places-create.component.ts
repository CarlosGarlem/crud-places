import { Component, OnInit } from '@angular/core';
import { Place, storage } from '../../data/localStorage';

@Component({
  selector: 'app-places-create',
  templateUrl: './places-create.component.html',
  styleUrls: ['./places-create.component.scss']
})

export class PlacesCreateComponent implements OnInit {
  public model: Place;
  public data: any [];
  public showMessage = false;

  constructor() { }
  ngOnInit():void {
    this.model = new Place();
    this.data = storage;
  }

  addItem(){
    this.model.id = (this.data.length + 1).toString();
    this.data.push(this.model);

    document.getElementById("iCountry").innerHTML = "";
    document.getElementById("iCapital").innerHTML = "";
    document.getElementById("iPlace").innerHTML = "";
    document.getElementById("iDescription").innerHTML = "";
    document.getElementById("iActivity").innerHTML = "";

    this.showMessage = true;
  }

  toggleMessage = () => {
    this.showMessage = false;
  }

}
