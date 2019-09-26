import { Component, OnInit } from '@angular/core';
import {storage} from '../../data/localStorage';

@Component({
  selector: 'app-places-delete',
  templateUrl: './places-delete.component.html',
  styleUrls: ['./places-delete.component.scss']
})
export class PlacesDeleteComponent implements OnInit {
  public data:any = [];
  public text: string = "";

  constructor() { }
  ngOnInit():void{
    this.data = storage
  }

  removeItem(item: any) {
    if(confirm("Are you sure you want to delete " + item.place + " (" + item.country + ")?")) {
      let index = this.data.indexOf(item);
      this.data.splice(index, 1)
    }
  }

  
}
