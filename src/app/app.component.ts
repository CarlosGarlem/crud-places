import { Component, OnInit } from '@angular/core';
import {storage} from '../data/localStorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'crud-places';
  public data:any = [];
  public text: string = "";

  ngOnInit():void{
    this.data = storage
  }

   addElement() {
    this.data.push({
        mensaje: this.text
      })
  }

}
