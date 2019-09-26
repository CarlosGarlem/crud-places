import { Component, OnInit } from '@angular/core';
import {storage} from '../../data/localStorage';

@Component({
  selector: 'app-places-read',
  templateUrl: './places-read.component.html',
  styleUrls: ['./places-read.component.scss']
})
export class PlacesReadComponent implements OnInit {
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
