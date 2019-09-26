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

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}
