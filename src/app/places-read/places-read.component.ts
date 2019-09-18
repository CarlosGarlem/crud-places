import { Component, OnInit } from '@angular/core';
import {storage} from '../../data/localStorage';

@Component({
  selector: 'app-places-read',
  templateUrl: './places-read.component.html',
  styleUrls: ['./places-read.component.scss']
})
export class PlacesReadComponent implements OnInit {
  title = 'crud-places';
  public data:any = [];
  public text: string = "";

  constructor() { }
  ngOnInit():void{
    this.data = storage
  }

}
